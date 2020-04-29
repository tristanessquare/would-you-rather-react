import React, {Component, Fragment} from 'react';
import connect from "react-redux/lib/connect/connect"
import {setAuthedUser} from "../actions/authedUser"

class Login extends Component {

  handleChangeLogin = (event) => {
    if (event.target.value === "") {
      return;
    }

    this.props.dispatch(setAuthedUser(event.target.value));

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    this.props.history.push(from)
  }

  render(){
    return (
            <Fragment>
              <div className="card-header central-title">Welcome to the Would You Rather App!</div>
              <div className="card-body centered">
                <img src={process.env.PUBLIC_URL + '/logo512.png'} className="logo" alt="React-Logo"/>
                <div>
                  Please login:
                </div>
                <select name="loginUser" size="1" onChange={(event) => this.handleChangeLogin(event)}>
                  <option value="">Select a user...</option>
                  { this.props.users.map(user => (<option key={user.id} value={user.id} >{user.name}</option>))}
                </select>
              </div>
            </Fragment>
    );
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: Object.keys(users).map(userId => users[userId]),
  }
}

export default connect(mapStateToProps)(Login);
