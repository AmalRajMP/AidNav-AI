import "./ChatMessage.css"

const ChatMessage = ({ role, content }) => {
  const lines = content.split("\n")

  return (
    <div className={`chat-message ${role}`}>
      <div className="message-content">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default ChatMessage
