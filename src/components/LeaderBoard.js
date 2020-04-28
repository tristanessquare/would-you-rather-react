import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect"
import LeaderBoardItem from "./LeaderBoardItem"
import {countUserAnswers, countUserCreatedAnswers} from "../utils/helpers"

class LeaderBoard extends Component {
  render() {
    return this.props.leaderBoardEntries.map(({userId}) => <LeaderBoardItem key={userId} userId={userId}/>);
  }
}

function mapStateToProps({questions, users}) {
  const leaderBoardEntries = Object.keys(users)
          .map(userId => ({
            userId: userId,
            score: countUserAnswers(userId, questions) + countUserCreatedAnswers(userId, questions),
          }))
          .sort((entry1, entry2) => entry2.score - entry1.score);

  return {
    leaderBoardEntries,
  }
}

export default connect(mapStateToProps)(LeaderBoard);
