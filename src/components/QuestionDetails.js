import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect"
import {hasUserAnswered} from "../utils/helpers"

class QuestionDetails extends Component {
  render() {
    const hasAnswered = hasUserAnswered(this.props.authedUser, this.props.question)

    return (
            <div>{
              hasAnswered &&
              <div>Results: {this.props.question.id}</div>
            }

              {
                !hasAnswered &&
                <div>Please answer: {this.props.question.id}</div>
              }</div>);

  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  const {question_id} = props.match.params

  return {
    question: questions[question_id],
    authedUser,
    author: users[questions[question_id].author],
  }
}

export default connect(mapStateToProps)(QuestionDetails);
