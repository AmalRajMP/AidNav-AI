import ai from "../../config/groq.js"

import SYSTEM_PROMPT from "../../prompts/systemPrompt.js"
import PROFILE_EXTRACTION_PROMPT from "../../prompts/profileExtractionPrompt.js"

export const generateResponse = async (
  contents,
  profile,
  relevantDocuments = [],
  nextQuestion = null,
) => {
  const trimmedDocuments = relevantDocuments.map((doc) => {
    const content =
      doc.content.length > 1200
        ? doc.content.slice(0, 1200) + "\n..."
        : doc.content

    return `
Official Application URL:
${doc.officialUrl || "Not available"}

${content}
`
  })

  let modeInstructions = ""

  if (nextQuestion) {
    modeInstructions = `
CURRENT MODE: PROFILE COLLECTION

The user's profile is NOT complete yet.

Your responsibilities:

- Collect ONLY the missing profile information.
- Do NOT recommend any government schemes.
- Do NOT mention any scheme names.
- Do NOT guess any schemes.
- Do NOT ask any other question.

You MUST end your response with this EXACT question:

${nextQuestion.question}

Rules:

- Respond naturally and conversationally.
- Briefly acknowledge the user's previous answer with a short phrase such as "Got it.", "Thanks!", "Great.", "Perfect.", or "Understood."
- Ask ONLY the exact question above.
- Do NOT rephrase the question.
- Never mention that information is already known, stored, or in the profile.
- Do NOT ask more than one question.
- Keep the response under 2 short sentences.
`
  } else {
    modeInstructions = `
CURRENT MODE: SCHEME RECOMMENDATION

The user's profile is complete.

Relevant Government Scheme Information:

${trimmedDocuments.join("\n\n------------------------\n\n")}

Your responsibilities:

- Recommend the most relevant schemes using the retrieved government scheme information.
- Do NOT invent scheme names, eligibility criteria, benefits, or financial assistance.
- Present recommendations confidently and naturally.
- Do NOT explain your search process.
- Do NOT apologize for finding fewer schemes.
- Do NOT say things like "Based on the information...", "I couldn't find more schemes...", or "Please note...".
- If only one suitable scheme is found, simply present that scheme.
- Ask another question ONLY if a retrieved scheme explicitly requires ONE additional field to confirm eligibility.
- Never interview the user for every scheme.
`
  }

  const systemInstruction = `
${SYSTEM_PROMPT}

Current User Profile:

${JSON.stringify(profile, null, 2)}

The Current User Profile is the source of truth.

Never ask for information already present in the Current User Profile.

${modeInstructions}
`

  try {
    const messages = [
      {
        role: "system",
        content: systemInstruction,
      },
      ...contents,
    ]

    const response = await ai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.4,
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error("Groq Error:", error)

    if (error.status === 429) {
      return "The AI service is temporarily busy. Please try again in a moment."
    }

    return "Sorry, I couldn't generate a response due to an unexpected server error. Please try again."
  }
}

export const extractProfile = async (message) => {
  try {
    const response = await ai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: PROFILE_EXTRACTION_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
    })

    const content = response.choices[0].message.content.trim()

    return JSON.parse(content)
  } catch (error) {
    console.error("Profile Extraction Error:", error)
    return {}
  }
}
