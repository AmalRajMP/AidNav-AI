import ai from "../../config/gemini.js"

import SYSTEM_PROMPT from "../../prompts/systemPrompt.js"
import PROFILE_EXTRACTION_PROMPT from "../../prompts/profileExtractionPrompt.js"

export const generateResponse = async (contents, profile) => {
  console.log(profile)
  const systemInstruction = `
    ${SYSTEM_PROMPT}

    Current User Profile:
    ${JSON.stringify(profile, null, 2)}
  `
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
      },
    })
    return response.text
  } catch (error) {
    console.error("Gemini Error:", error)
    throw new Error("Failed to generate AI response.")
  }
}

export const extractProfile = async (contents) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: PROFILE_EXTRACTION_PROMPT,
      },
    })

    return JSON.parse(response.text)
  } catch (error) {
    console.error("Profile Extraction Error:", error)
    throw new Error("Failed to extract profile.")
  }
}
