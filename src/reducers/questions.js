import {ANSWER_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions"

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      let info = action.answerInfo
      return {
        ...state,
        [info.qid]: {
          ...state[info.qid],
          [info.answer]: {
            ...state[info.qid][info.answer],
            votes: state[info.qid][info.answer].votes.concat(info.authedUser),
          },
        },
      };
    default:
      return state;
  }
}