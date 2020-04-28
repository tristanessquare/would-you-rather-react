import React, {Component, Fragment} from 'react';
import Nav from "./Nav"
import {BrowserRouter as Router, Route} from "react-router-dom"
import QuestionOverview from "./QuestionOverview"
import Login from "./Login"
import NewQuestion from "./NewQuestion"
import QuestionDetails from "./QuestionDetails"
import LeaderBoard from "./LeaderBoard"
import Logout from "./Logout"
import connect from "react-redux/lib/connect/connect"
import {handleInitialData} from "../actions/shared"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
            <Router>
              {this.props.loading === true ?
                      null :
                      <Fragment>
                        <Nav/>
                        <div className="app-container">
                          <Route path="/" exact component={QuestionOverview}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/logout" component={Logout}/>
                          <Route path="/new" component={NewQuestion}/>
                          <Route path="/questions/:question_id" component={QuestionDetails}/>
                          <Route path="/leaderboard" component={LeaderBoard}/>
                        </div>
                      </Fragment>
              }
            </Router>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
