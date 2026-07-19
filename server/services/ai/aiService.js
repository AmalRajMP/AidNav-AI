import { generateResponse, extractProfile } from "../groq/groqService.js"
import mergeProfile from "../../utils/mergeProfile.js"
import { searchDocuments } from "../rag/query.js"
import shouldSkipRAG from "../../utils/shouldSkipRAG.js"
import getNextQuestion from "../../utils/getNextQuestion.js"

const buildContents = (history, message) => {
  const recentHistory = history.slice(-8)

  const contents = recentHistory.map(({ role, content }) => ({
    role: role === "bot" ? "assistant" : "user",
    content,
  }))

  contents.push({
    role: "user",
    content: message,
  })

  return contents
}

const aiService = async (history = [], message, userProfile = {}) => {
  let updatedProfile = userProfile
  console.log("Incoming Profile:", userProfile)
  try {
    const extractedProfile = await extractProfile(message)

    console.log("Extracted Profile:", extractedProfile)

    updatedProfile = mergeProfile(userProfile, extractedProfile)

    console.log("Updated Profile:", updatedProfile)
  } catch (error) {
    console.warn("Profile extraction skipped:", error.message)
  }

  const nextQuestion = getNextQuestion(updatedProfile)

  const contents = buildContents(history, message)
  let relevantDocuments = []

  if (!nextQuestion && !shouldSkipRAG(message)) {
    const searchQuery = `
      User Query:
      ${message}

      Current User Profile:
      ${JSON.stringify(updatedProfile, null, 2)}

      Find the most relevant government schemes for this user.
    `

    relevantDocuments = await searchDocuments(searchQuery)
  }

  const reply = await generateResponse(
    contents,
    updatedProfile,
    relevantDocuments,
    nextQuestion,
  )

  return { reply, profile: updatedProfile }
}

export default aiService
