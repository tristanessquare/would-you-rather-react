import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"
import {handleAnswerQuestion} from "../actions/questions"

class Question extends Component {

  state = {
    selectedOption: "optionOne"
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {dispatch, authedUser, questionId} = this.props;
    const {selectedOption} = this.state;

    dispatch(handleAnswerQuestion(questionId, selectedOption, authedUser));
  }

  render() {
    return (<Fragment>
      <div className="card-header">
        {this.props.author.name} asks:
      </div>
      <div className="card-body clearfix">
        <img src={this.props.author.avatarURL} alt="Avatar" className="big-avatar"/>
        <div className="right-column">
          <div className="question">Would you rather...</div>

          <div className="radio-options">
            <label>
              <input type="radio" value="optionOne" checked={this.state.selectedOption === "optionOne"} onChange={this.handleOptionChange}/>
              {this.props.question.optionOne.text}
            </label>
          </div>
          <div className="radio-options">
            <label>
              <input type="radio" value="optionTwo" checked={this.state.selectedOption === "optionTwo"} onChange={this.handleOptionChange}/>
              {this.props.question.optionTwo.text}
            </label>
          </div>

          <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
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

export default connect(mapStateToProps)(Question);
