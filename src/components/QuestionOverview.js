import React, {Component, Fragment} from 'react';
import Question from "./Question"
import connect from "react-redux/lib/connect/connect"
import {hasUserAnswered} from "../utils/helpers"
import '../styles/QuestionOverview.css'

const UNANSWERED_TAB = 'UNANSWERED_TAB'
const ANSWERED_TAB = 'ANSWERED_TAB'

class QuestionOverview extends Component {

  state = {
    selectedTab: UNANSWERED_TAB
  }

  selectTab = (tab) => {
    this.setState({
      selectedTab: tab
    });
  }

  render() {
    const {selectedTab} = this.state;
    const questionIds = selectedTab === UNANSWERED_TAB ? this.props.unansweredQuestionIds : this.props.answeredQuestionIds;
    return (
            <Fragment>
              <div className="tab">
                <button className={selectedTab === UNANSWERED_TAB ? 'active left' : 'left'} onClick={() => this.selectTab(UNANSWERED_TAB)}>Unanswered Questions</button>
                <button className={selectedTab === ANSWERED_TAB ? 'active right' : 'right'} onClick={() => this.selectTab(ANSWERED_TAB)}>Answered Questions</button>
              </div>

              {questionIds.length !== 0 &&
              <div className="tabcontent">
                {questionIds.map(questionId => <Question key={questionId} questionId={questionId}/>)}
              </div>
              }

              {questionIds.length === 0 &&
              <div className="tabcontent">
                There are no questions in this category.
              </div>
              }
            </Fragment>
    );
  }

}

const mapStateToProps = ({questions, authedUser}) => {
  const questionIds = Object.keys(questions);
  return {
    unansweredQuestionIds: questionIds.filter(questionId => !hasUserAnswered(authedUser, questions[questionId])),
    answeredQuestionIds: questionIds.filter(questionId => hasUserAnswered(authedUser, questions[questionId])),
  }
}

export default connect(mapStateToProps)(QuestionOverview);
