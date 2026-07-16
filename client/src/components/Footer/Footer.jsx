import { FiShield } from "react-icons/fi"

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">
          <FiShield />
          AidNav <span>AI</span>
        </h2>

        <p className="footer-copyright">
          © 2026 AidNav AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
