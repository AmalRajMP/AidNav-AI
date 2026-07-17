import { generateResponse } from "../gemini/geminiService.js"

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

const aiService = async (history = [], message) => {
  const contents = buildContents(history, message)
  console.log(JSON.stringify(contents, null, 2))
  const reply = await generateResponse(contents)

  return reply
}

export default aiService
