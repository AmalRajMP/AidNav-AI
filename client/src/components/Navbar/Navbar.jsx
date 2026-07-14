import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"

import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🛡️ AidNav AI
        </Link>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/scheme-finder">Find Schemes</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
        <Link to="/scheme-finder" className="navbar-button">
          Get Started
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
