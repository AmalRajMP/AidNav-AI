const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to AidNav AI API",
  })
})

module.exports = app
