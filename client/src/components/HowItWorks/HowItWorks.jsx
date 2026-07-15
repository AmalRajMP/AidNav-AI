import "./HowItWorks.css"
import { FiUser, FiCpu, FiSearch, FiCheckCircle } from "react-icons/fi"

const steps = [
  {
    id: 1,
    icon: <FiUser />,
    title: "Tell Us About Yourself",
    description:
      "Answer a few simple questions about your education, income, location, and category.",
  },
  {
    id: 2,
    icon: <FiCpu />,
    title: "AI Analyzes Your Profile",
    description:
      "Our AI understands your information and identifies schemes that match your eligibility.",
  },
  {
    id: 3,
    icon: <FiSearch />,
    title: "Discover Matching Schemes",
    description:
      "Browse personalized government schemes ranked according to relevance and benefits.",
  },
  {
    id: 4,
    icon: <FiCheckCircle />,
    title: "Apply with Confidence",
    description:
      "View required documents, eligibility criteria, and application guidance in one place.",
  },
]

const HowItWorks = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <span className="how-tag">How It Works</span>

          <h2>
            Finding Government Schemes Has
            <span> Never Been Easier</span>
          </h2>

          <p>
            AidNav AI uses Artificial Intelligence to simplify the entire
            process—from understanding your profile to recommending the right
            government schemes.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
