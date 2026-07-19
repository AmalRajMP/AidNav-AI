import ai from "../../config/groq.js"

import SYSTEM_PROMPT from "../../prompts/systemPrompt.js"
import PROFILE_EXTRACTION_PROMPT from "../../prompts/profileExtractionPrompt.js"

export const generateResponse = async (
  contents,
  profile,
  relevantDocuments = [],
) => {
  console.log(profile)
  console.log("Retrieved document count:", relevantDocuments.length)

  const trimmedDocuments = relevantDocuments.map((doc) =>
    doc.length > 2500 ? doc.slice(0, 2500) + "\n..." : doc,
  )

  const systemInstruction = `
    ${SYSTEM_PROMPT}

    Current User Profile:
    ${JSON.stringify(profile, null, 2)}

    Relevant Government Scheme Information:
    ${trimmedDocuments.join("\n\n------------------------\n\n")}

    Instructions:
    - Use the above scheme information as the primary source of truth.
    - If the retrieved information answers the user's question, base your response on it.
    - If the retrieved information is insufficient, use your general knowledge but clearly indicate when information is not available in the retrieved schemes.
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
    console.error("Gemini Error:", error)

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
