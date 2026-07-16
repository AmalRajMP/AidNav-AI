import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import WelcomeScreen from "../../components/Chat/WelcomeScreen"
import ChatInput from "../../components/Chat/ChatInput"
import ChatMessage from "../../components/Chat/ChatMessage"

import "./BenefitsFinder.css"

const BenefitsFinder = () => {
  const [messages, setMessages] = useState([])

  const handleSendMessage = (text) => {
    const userMessage = {
      id: uuidv4(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
  }

  return (
    <main className="benefits-page">
      <div className="chat-content">
        {messages.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <div className="chat-messages">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                message={message.content}
              />
            ))}
          </div>
        )}
      </div>
      <ChatInput onSend={handleSendMessage} />
    </main>
  )
}

export default BenefitsFinder
