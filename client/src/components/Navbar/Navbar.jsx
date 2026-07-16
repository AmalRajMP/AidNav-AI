import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"
import { FiShield } from "react-icons/fi"

import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <h2 className="footer-logo">
            <FiShield />
            AidNav <span>AI</span>
          </h2>
        </Link>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/find-benefits">Find Benefits</NavLink>
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
        <Link to="/find-benefits" className="navbar-button">
          Get Started
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
