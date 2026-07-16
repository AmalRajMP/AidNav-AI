import { Link } from "react-router-dom"

import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            Government Scheme Discovery Platform
          </span>

          <h1>
            Find Government Schemes
            <span> You May Be Eligible For</span>
          </h1>

          <p>
            Answer a few simple questions about yourself, and we'll help you
            discover scholarships, financial assistance, pensions, healthcare
            benefits, and other government schemes that match your needs.
          </p>

          <div className="hero-buttons">
            <Link to="/find-benefits" className="primary-button">
              Check My Eligibility
            </Link>

            <a href="#features" className="secondary-button">
              Learn More
            </a>
          </div>

          <div className="hero-features">
            <span>Simple Questions</span>
            <span>Personalized Results</span>
            <span>Free to Use</span>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-card">
            <h3>Let's Find the Right Schemes for You</h3>

            <div className="chat user">I'm a college student from Kerala.</div>

            <div className="chat user">
              My family's annual income is ₹2 lakh.
            </div>

            <div className="chat bot">
              <h4>You may be eligible for:</h4>

              <ul>
                <li>Scholarship Programs</li>
                <li>Skill Development Initiatives</li>
                <li>Educational Financial Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
