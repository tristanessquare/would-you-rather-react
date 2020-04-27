export const hasUserAnswered = (userId, question) => {
  return question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId);
}