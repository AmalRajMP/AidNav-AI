import aiService from "../services/ai/aiService.js"

export const chatWithAI = async (req, res) => {
  try {
    const { history, message, userProfile } = req.body

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      })
    }

    const { reply, profile } = await aiService(history, message, userProfile)

    res.status(200).json({
      success: true,
      reply,
      profile,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}
