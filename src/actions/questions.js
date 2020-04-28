import {saveQuestionAnswer} from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

// authedUser, qid, answer
function answerQuestion(answerInfo) {
  return {
    type: ANSWER_QUESTION,
    answerInfo,
  }
}

export function handleAnswerQuestion(answerInfo) {
  return (dispatch) => {
    saveQuestionAnswer(answerInfo)
            .then(() => dispatch(answerQuestion(answerInfo)))
  }
}