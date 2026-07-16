import { useState } from "react"

import { IoSend } from "react-icons/io5"

import "./ChatInput.css"

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("")

  const handleSend = () => {
    const text = input.trim()

    if (!text) return

    onSend(text)
    setInput("")
  }

  return (
    <div className="chat-input">
      <div className="input-wrapper">
        <textarea
          placeholder="Describe your situation..."
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
        />

        <button
          type="button"
          className="send-button"
          aria-label="Send message"
          onClick={handleSend}
        >
          <IoSend />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
