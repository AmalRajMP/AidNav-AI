const PROFILE_KEYWORDS = [
  "student",
  "farmer",
  "widow",
  "senior citizen",
  "retired",
  "occupation",
  "education",
  "college",
  "school",
  "kerala",
  "karnataka",
  "tamil nadu",
  "state",
  "district",
  "age",
  "income",
  "salary",
  "obc",
  "sc",
  "st",
  "general",
  "ews",
  "female",
  "male",
  "woman",
  "disability",
  "disabled",
]

const shouldExtractProfile = (message) => {
  const normalizedMessage = message.toLowerCase()

  return PROFILE_KEYWORDS.some((keyword) => normalizedMessage.includes(keyword))
}

export default shouldExtractProfile
