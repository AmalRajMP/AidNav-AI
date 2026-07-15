import { Link, useNavigate } from "react-router-dom"

import "./CTA.css"

const CTA = () => {
  const navigate = useNavigate()

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Ready to Find Your
          <span> Perfect Scheme?</span>
        </h2>

        <p>
          Stop searching through dozens of government websites. Let AidNav AI
          analyze your profile and recommend the schemes you're eligible for in
          just a few seconds.
        </p>
        <div className="cta-buttons">
          <Link to="/scheme-finder" className="cta-primary">
            Try AidNav AI →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
