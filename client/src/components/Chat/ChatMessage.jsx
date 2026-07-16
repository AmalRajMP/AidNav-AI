import "./ChatMessage.css"

const ChatMessage = ({ role, message }) => {
  return (
    <div className={`chat-message ${role}`}>
      <div className="message-content">
        {message.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default ChatMessage
