import { Link } from "react-router-dom"

import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found.</p>

      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default NotFound
