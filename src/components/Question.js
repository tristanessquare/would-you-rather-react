import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"
import '../styles/Question.css'
import {Link} from "react-router-dom"

class Question extends Component {
  render() {
    return (
            <Fragment>
              <div className="card-header">
                {this.props.author.name} asks:
              </div>
              <div className="card-body">
                <img src={this.props.author.avatarURL} alt="Avatar" className="avatar"/>
                <div className="right-column">
                  <div className="question">Would you rather</div>
                  <div>...{this.props.question.optionOne.text}...</div>
                  <Link to={{pathname: `/questions/${this.props.questionId}`}}>View Poll</Link>
                </div>
              </div>
            </Fragment>
    );

  }
}

const mapStateToProps = ({questions, users}, props) => {
  const question = questions[props.questionId];
  const authorId = question.author;
  return {
    question,
    author: users[authorId],
  };
};

export default connect(mapStateToProps)(Question);