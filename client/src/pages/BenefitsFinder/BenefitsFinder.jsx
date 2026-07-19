import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

import WelcomeScreen from "../../components/Chat/WelcomeScreen"
import ChatInput from "../../components/Chat/ChatInput"
import ChatMessage from "../../components/Chat/ChatMessage"
import TypingIndicator from "../../components/Chat/TypingIndicator"

import "./BenefitsFinder.css"

const BenefitsFinder = () => {
  const [messages, setMessages] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages, isTyping])

  const handleSendMessage = async (text) => {
    const userMessage = {
      id: uuidv4(),
      role: "user",
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])

    setIsTyping(true)

    try {
      const url = "http://localhost:5000/api/chat"
      console.log("Sending Profile:", userProfile)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          history: messages,
          message: text,
          userProfile,
        }),
      }

      const response = await fetch(url, options)
      const { reply, profile } = await response.json()
      console.log({ reply, profile })
      if (!response.ok) {
        throw new Error("Request failed")
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: uuidv4(),
            role: "bot",
            content: reply,
          },
        ])
        setUserProfile(profile)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsTyping(false)
    }
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
