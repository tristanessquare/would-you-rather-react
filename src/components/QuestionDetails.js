import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect"
import {hasUserAnswered} from "../utils/helpers"
import QuestionResult from "./QuestionResult"
import Question from "./Question"
import {Redirect} from "react-router-dom"

class QuestionDetails extends Component {

  render() {

    if (!this.props.questionId) {
      return <Redirect to='/404'/>
    }

    let questionComponent;

    if (this.props.hasUserAnswered) {
      questionComponent = <QuestionResult questionId={this.props.questionId}/>;
    } else {
      questionComponent = <Question questionId={this.props.questionId}/>;
    }

    return questionComponent;

  }

}

function mapStateToProps({authedUser, questions, users}, props) {
  const {question_id} = props.match.params;
  const question = questions[question_id];

  if (!question) {
    return {}
  }

  return {
    hasUserAnswered: hasUserAnswered(authedUser, question),
    questionId: question.id,

  }
}

export default connect(mapStateToProps)(QuestionDetails);
