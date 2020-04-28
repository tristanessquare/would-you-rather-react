import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"

class QuestionResult extends Component {
  render() {
    const votesOptionOne = this.props.question.optionOne.votes.length;
    const votesOptionTwo = this.props.question.optionTwo.votes.length;
    const allVotes = votesOptionOne + votesOptionTwo;
    const optionOnePercent = (votesOptionOne / allVotes) * 100;
    const optionTwoPercent = (votesOptionTwo / allVotes) * 100;

    return (<Fragment>
      <div className="card-header">
        {this.props.author.name} asks:
      </div>
      <div className="card-body clearfix">
        <img src={this.props.author.avatarURL} alt="Avatar" className="big-avatar"/>
        <div className="right-column">
          <div className="question">Results:</div>

          <div className="result-option">
            <div className="label">{this.props.question.optionOne.text} {this.props.question.optionOne.votes.includes(this.props.authedUser) ? '(your choiche)' : null}</div>
            <div className="bar-container">
              <div className="bar" style={{width: `${optionOnePercent}%`}}/>
            </div>
            <div className="subtitle">{`${votesOptionOne} out of ${allVotes}`}</div>
          </div>

          <div className="result-option">
            <div className="label">{this.props.question.optionTwo.text} {this.props.question.optionTwo.votes.includes(this.props.authedUser) ? '(your choiche)' : null}</div>
            <div className="bar-container">
              <div className="bar" style={{width: `${optionTwoPercent}%`}}/>
            </div>
            <div className="subtitle">{`${votesOptionTwo} out of ${allVotes}`}</div>
          </div>
        </div>
      </div>
    </Fragment>);
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  return {
    question: questions[props.questionId],
    authedUser,
    author: users[questions[props.questionId].author],
  }
}

export default connect(mapStateToProps)(QuestionResult);
