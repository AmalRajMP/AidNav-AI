import { CHAT_SUGGESTIONS } from "../../constants/chatSuggestions"

import "./SuggestionChips.css"

const SuggestionChips = ({ onSuggestionClick }) => {
  return (
    <div className="suggestion-chips">
      {CHAT_SUGGESTIONS.map((item) => (
        <button
          key={item}
          type="button"
          className="suggestion-chip"
          onClick={() => onSuggestionClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default SuggestionChips
