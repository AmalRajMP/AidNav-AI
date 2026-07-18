const SKIP_RAG_MESSAGES = [
  "ok",
  "okay",
  "yes",
  "no",
  "thanks",
  "thank you",
  "continue",
  "next",
  "explain more",
  "tell me more",
]

const shouldSkipRAG = (message) => {
  const normalizedMessage = message
    .toLowerCase()
    .trim()
    .replace(/[.!?,]+$/, "")

  return SKIP_RAG_MESSAGES.some((keyword) => normalizedMessage === keyword)
}

export default shouldSkipRAG
