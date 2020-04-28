import {saveQuestion, saveQuestionAnswer} from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'

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

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  }
}

export function handleCreateQuestion(createQuestionInfo) {
  return (dispatch) => {
    return saveQuestion(createQuestionInfo)
            .then((question) => {
              dispatch(createQuestion(question))
            })
  }
}