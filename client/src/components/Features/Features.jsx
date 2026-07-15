import "./Features.css"
import { FiSearch, FiCheckCircle, FiFileText } from "react-icons/fi"

const features = [
  {
    id: 1,
    icon: <FiSearch />,
    title: "AI Scheme Finder",
    description:
      "Describe your situation in simple language and instantly discover the most relevant government schemes.",
  },
  {
    id: 2,
    icon: <FiCheckCircle />,
    title: "AI Eligibility Checker",
    description:
      "Check your eligibility in seconds using AI-powered analysis based on your personal details.",
  },
  {
    id: 3,
    icon: <FiFileText />,
    title: "AI Document Assistant",
    description:
      "Know exactly which documents are required and receive clear guidance for a hassle-free application.",
  },
]

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <span className="section-tag">Features</span>

          <h2>
            Everything You Need to Access
            <span> Government Schemes</span>
          </h2>

          <p>
            AidNav AI simplifies discovering schemes, checking eligibility, and
            preparing your documents using Artificial Intelligence.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
