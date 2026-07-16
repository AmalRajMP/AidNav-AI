import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import WelcomeScreen from "../../components/Chat/WelcomeScreen"
import ChatInput from "../../components/Chat/ChatInput"
import ChatMessage from "../../components/Chat/ChatMessage"
import TypingIndicator from "../../components/Chat/TypingIndicator"

import "./BenefitsFinder.css"

const BenefitsFinder = () => {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages, isTyping])

  const handleSendMessage = (text) => {
    const userMessage = {
      id: uuidv4(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])

    setIsTyping(true)

    setTimeout(() => {
      const botMessage = {
        id: uuidv4(),
        role: "bot",
        content:
          "This is a temporary AI response.\nGemini integration comes next.",
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <main className="benefits-page">
      <div className="chat-content">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={handleSendMessage} />
        ) : (
          <div className="chat-messages">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}

            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="chat-input-wrapper">
        <ChatInput onSend={handleSendMessage} />
      </div>
    </main>
  )
}

export default BenefitsFinder
