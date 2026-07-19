import ai from "../../config/groq.js"

import SYSTEM_PROMPT from "../../prompts/systemPrompt.js"
import PROFILE_EXTRACTION_PROMPT from "../../prompts/profileExtractionPrompt.js"

export const generateResponse = async (
  contents,
  profile,
  relevantDocuments = [],
  nextQuestion = null,
) => {
  console.log(profile)
  console.log("Retrieved document count:", relevantDocuments.length)

  const trimmedDocuments = relevantDocuments.map((doc) =>
    doc.length > 1200 ? doc.slice(0, 1200) + "\n..." : doc,
  )

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

- Acknowledge the user's previous message in one short sentence.
- Ask ONLY the exact question above.
- Do NOT rephrase it.
- Do NOT end the response in any other way.
- Keep the response under 2 sentences.
`
  } else {
    modeInstructions = `
CURRENT MODE: SCHEME RECOMMENDATION

The user's profile is complete.

Relevant Government Scheme Information:

${trimmedDocuments.join("\n\n------------------------\n\n")}

Your responsibilities:

- Use ONLY the retrieved government scheme information.
- Do NOT invent scheme names.
- Recommend the most relevant schemes.
- Explain why each scheme matches the user's profile.
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
