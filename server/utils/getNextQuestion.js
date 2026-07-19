const QUESTIONS = [
  {
    field: "age",
    question: "What is your age?",
  },
  {
    field: "state",
    question: "Which state do you live in?",
  },
  {
    field: "occupation",
    question: "What is your occupation?",
  },
  {
    field: "education",
    question: "What is your highest qualification?",
  },
  {
    field: "category",
    question: "Which category do you belong to? (General/OBC/SC/ST/EWS)",
  },
  {
    field: "annualIncome",
    question: "What is your annual family income?",
  },
]

const getNextQuestion = (profile) => {
  for (const item of QUESTIONS) {
    if (
      profile[item.field] === null ||
      profile[item.field] === undefined ||
      profile[item.field] === ""
    ) {
      return item
    }
  }

  return null
}

export default getNextQuestion
