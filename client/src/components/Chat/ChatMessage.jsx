import ReactMarkdown from "react-markdown"
import {
  FaLandmark,
  FaCircleCheck,
  FaGift,
  FaFileLines,
  FaClipboard,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6"

import "./ChatMessage.css"

const ChatMessage = ({ role, content }) => {
  return (
    <div className={`chat-message ${role}`}>
      <div className="message-content">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <div className="scheme-header">
                <FaLandmark className="section-icon" />
                <h1 className="md-h1">{children}</h1>
              </div>
            ),

            h2: ({ children }) => {
              const title = children.toString()

              let Icon = FaClipboard

              if (title === "Why you're eligible") {
                Icon = FaCircleCheck
              } else if (title === "Benefits") {
                Icon = FaGift
              } else if (title === "Documents Required") {
                Icon = FaFileLines
              } else if (title === "How to Apply") {
                Icon = FaClipboard
              } else if (title === "Official Website") {
                Icon = FaArrowUpRightFromSquare
              }

              return (
                <div className="section-heading">
                  <Icon className="section-icon" />
                  <h2 className="md-h2">{title}</h2>
                </div>
              )
            },

            h3: ({ children }) => <h3 className="md-h3">{children}</h3>,

            p: ({ children }) => <p className="md-p">{children}</p>,

            ul: ({ children }) => <ul className="md-ul">{children}</ul>,

            ol: ({ children }) => <ol className="md-ol">{children}</ol>,

            li: ({ children }) => <li className="md-li">{children}</li>,

            strong: ({ children }) => (
              <strong className="md-strong">{children}</strong>
            ),

            em: ({ children }) => <em className="md-em">{children}</em>,

            blockquote: ({ children }) => (
              <blockquote className="md-blockquote">{children}</blockquote>
            ),

            hr: () => <hr className="md-divider" />,

            a: ({ href, children }) => (
              <a
                className="apply-button"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowUpRightFromSquare />
                <span>{children}</span>
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ChatMessage
