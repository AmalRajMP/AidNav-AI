import { generateResponse, extractProfile } from "../gemini/geminiService.js"
import mergeProfile from "../../utils/mergeProfile.js"

const buildContents = (history, message) => {
  const contents = history.map(({ role, content }) => ({
    role: role === "bot" ? "model" : "user",
    parts: [
      {
        text: content,
      },
    ],
  }))

  contents.push({
    role: "user",
    parts: [
      {
        text: message,
      },
    ],
  })

  return contents
}

const aiService = async (history = [], message, userProfile = {}) => {
  const extractedProfile = await extractProfile(message)
  const updatedProfile = mergeProfile(userProfile, extractedProfile)

  const contents = buildContents(history, message)

  const reply = await generateResponse(contents, updatedProfile)

  return { reply, profile: updatedProfile }
}

export default aiService
