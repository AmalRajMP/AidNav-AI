import ai from "../../config/gemini.js"
import SYSTEM_PROMPT from "../../prompts/systemPrompt.js"

export const generateResponse = async (contents) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    })
    return response.text
  } catch (error) {
    console.error("Gemini Error:", error)
    throw new Error("Failed to generate AI response.")
  }
}
