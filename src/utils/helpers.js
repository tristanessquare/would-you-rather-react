export const hasUserAnswered = (userId, question) => {
  return question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId);
}

export const countUserAnswers = (userId, questions) => {
  return Object.keys(questions)
          .map(questionId => questions[questionId])
          .filter(question =>
                  question.optionOne.votes.includes(userId) ||
                  question.optionTwo.votes.includes(userId))
          .length
}

export const countUserCreatedAnswers = (userId, questions) => {
  return Object.keys(questions)
          .map(questionId => questions[questionId])
          .filter(question =>
                  question.author === userId)
          .length
}