import "./SuggestionChips.css"

const suggestions = ["Student", "Farmer", "Job Seeker", "Business Owner"]

const SuggestionChips = () => {
  return (
    <div className="suggestion-chips">
      {suggestions.map((item) => (
        <button key={item} className="suggestion-chip" type="button">
          {item}
        </button>
      ))}
    </div>
  )
}

export default SuggestionChips
