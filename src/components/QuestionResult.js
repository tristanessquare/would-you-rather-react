import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"
import ResultBar from "./ResultBar"

class QuestionResult extends Component {
  render() {
    const votesOptionOne = this.props.question.optionOne.votes.length;
    const votesOptionTwo = this.props.question.optionTwo.votes.length;
    const allVotes = votesOptionOne + votesOptionTwo;

    return (<Fragment>
      <div className="card-header">
        {this.props.author.name} asks:
      </div>
      <div className="card-body clearfix">
        <img src={this.props.author.avatarURL} alt="Avatar" className="big-avatar"/>
        <div className="right-column">
          <div className="question">Results:</div>

          <ResultBar optionText={this.props.question.optionOne.text}
                     usersChoice={this.props.question.optionOne.votes.includes(this.props.authedUser)}
                     countOfOptionVotes={votesOptionOne}
                     countOfallVotes={allVotes}/>

          <ResultBar optionText={this.props.question.optionTwo.text}
                     usersChoice={this.props.question.optionTwo.votes.includes(this.props.authedUser)}
                     countOfOptionVotes={votesOptionTwo}
                     countOfallVotes={allVotes}/>

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
