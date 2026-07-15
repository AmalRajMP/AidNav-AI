import { FiShield } from "react-icons/fi"

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <FiShield />
            AidNav <span>AI</span>
          </h2>

          <p>Helping citizens discover government schemes with AI.</p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AidNav AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
