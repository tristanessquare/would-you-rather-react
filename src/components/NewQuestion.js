import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"
import {handleCreateQuestion} from "../actions/questions"
import {withRouter} from "react-router-dom"

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  changeContent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clearState = () => {
    this.setState({
      optionOneText: '',
      optionTwoText: '',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {optionOneText, optionTwoText} = this.state;
    const {authedUser} = this.props;

    this.props.dispatch(handleCreateQuestion(optionOneText, optionTwoText, authedUser))
            .then(() => this.clearState())
            .then(() => this.props.history.push("/"));
  }

  render() {
    return (<Fragment>
      <div className="card-header">
        Create new Question
      </div>
      <div className="card-body">

        <div className="label">
          Complete the question:
        </div>
        <div className="bold">
          Would you rather...
        </div>

        <input type="text" name="optionOneText" value={this.state.optionOneText} placeholder="Enter question one..." onChange={(event) => this.changeContent(event)}/>
        OR
        <input type="text" name="optionTwoText" value={this.state.optionTwoText} placeholder="Enter question two..." onChange={(event) => this.changeContent(event)}/>

        <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
      </div>
    </Fragment>);
  }

}

function mapStateToProps({authedUser}) {
  return {
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
