import React, {Component, Fragment} from 'react';
import Question from "./Question"

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
    const questionIds = this.state.selectedTab === UNANSWERED_TAB ? this.props.unansweredQuestionIds : this.props.answeredQuestionIds;
    return (
            <Fragment>
              <div className="tab">
                <button className="tablinks" onClick={() => this.selectTab(UNANSWERED_TAB)}>Unanswered Questions</button>
                <button className="tablinks" onClick={() => this.selectTab(ANSWERED_TAB)}>Answered Questions</button>
              </div>

              <div className="tabcontent">
                {questionIds.map(questionId => <Question questionId={questionId}/>)}
              </div>
            </Fragment>
    );
  }

}

export default QuestionOverview;
