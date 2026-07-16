import { WELCOME_MESSAGE } from "../../constants/assistant"

import SuggestionChips from "./SuggestionChips"

import "./WelcomeScreen.css"

const WelcomeScreen = ({ onSuggestionClick }) => {
  return (
    <section className="welcome-screen">
      <div className="welcome-card">
        <h1>Welcome to AidNav AI</h1>

        <p>{WELCOME_MESSAGE}</p>

        <SuggestionChips onSuggestionClick={onSuggestionClick} />
      </div>
    </section>
  )
}

export default WelcomeScreen
