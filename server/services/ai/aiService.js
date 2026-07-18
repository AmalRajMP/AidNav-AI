import { generateResponse, extractProfile } from "../gemini/geminiService.js"
import mergeProfile from "../../utils/mergeProfile.js"
import { searchDocuments } from "../rag/query.js"
import shouldExtractProfile from "../../utils/shouldExtractProfile.js"
import shouldSkipRAG from "../../utils/shouldSkipRAG.js"

const buildContents = (history, message) => {
  const recentHistory = history.slice(-8)

  const contents = recentHistory.map(({ role, content }) => ({
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
  let updatedProfile = userProfile

  let updatedProfile = userProfile

  if (shouldExtractProfile(message)) {
    try {
      const extractedProfile = await extractProfile(message)
      updatedProfile = mergeProfile(userProfile, extractedProfile)
    } catch (error) {
      console.warn("Profile extraction skipped:", error.message)
    }
  }
  const contents = buildContents(history, message)

  let relevantDocuments = []

  if (!shouldSkipRAG(message)) {
    relevantDocuments = await searchDocuments(message)
  }

  console.log("Retrieved documents:", relevantDocuments)

  const reply = await generateResponse(
    contents,
    updatedProfile,
    relevantDocuments,
  )

  return { reply, profile: updatedProfile }
}

export default aiService
