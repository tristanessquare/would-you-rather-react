import React from 'react';
import {Link, NavLink} from "react-router-dom"
import '../styles/Nav.css'

function Nav() {
  return (
          <ul className="nav">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new">New Question</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li className="right">
              <Link to="/logout">Logout</Link>
            </li>
            <li className="right">
              <Link to="/login">Login</Link>
            </li>
            <li className="right">
              <span>John Doe</span>
            </li>
          </ul>
  );
}

export default Nav;
