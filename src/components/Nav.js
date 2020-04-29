import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom"
import connect from "react-redux/lib/connect/connect"
import {unsetAuthedUser} from "../actions/authedUser"

class Nav extends Component {

  handleLogout = (event) => {
    event.preventDefault();

    const {dispatch} = this.props;

    dispatch(unsetAuthedUser());
  }

  render() {
    return (
            <ul className="nav">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/add">New Question</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
              {this.props.loggedInUser &&
              <Fragment>
                <li className="right">
                  <button onClick={(event) => this.handleLogout(event)}>Logout</button>
                </li>
                <li className="right">
                  <span className="avatar-container">
                    {this.props.loggedInUser.name}
                    <img src={this.props.loggedInUser.avatarURL} alt="Avatar" className="small-avatar"/>
                  </span>
                </li>
              </Fragment>
              }
            </ul>
    );
  }
}

const mapStateToProps = ({authedUser, users}) => {
  return {
    loggedInUser: users[authedUser],
  }
}

export default connect(mapStateToProps)(Nav);
