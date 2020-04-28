import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect"
import {countUserAnswers, countUserCreatedAnswers} from "../utils/helpers"

class LeaderBoardItem extends Component {
  render() {
    return (
            <div className="leaderboard-item clearfix">
              <img src={this.props.avatarURL} alt="Avatar" className="avatar"/>
              <div className="score">
                <div className="score-circle">
                  {this.props.createCount + this.props.answerCount}
                </div>
              </div>
              <div className="main">
                <div className="title">{this.props.username}</div>
                <div className="counts">Answered questions: {this.props.answerCount}</div>
                <div className="counts">Created questions: {this.props.createCount}</div>
              </div>
            </div>
    );
  }
}

function mapStateToProps({questions, users}, props) {
  const user = users[props.userId];

  return {
    userId: props.userId,
    avatarURL: user.avatarURL,
    username: user.name,
    answerCount: countUserAnswers(props.userId, questions),
    createCount: countUserCreatedAnswers(props.userId, questions),
  };
}

export default connect(mapStateToProps)(LeaderBoardItem);
