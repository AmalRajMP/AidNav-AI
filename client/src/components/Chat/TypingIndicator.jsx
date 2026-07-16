import "./TypingIndicator.css"

const TypingIndicator = () => {
  return (
    <div className="chat-message bot">
      <div className="typing-indicator">
        <p>Thinking...</p>

        <div className="typing-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator
