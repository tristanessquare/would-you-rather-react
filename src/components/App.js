import React, {Component, Fragment} from 'react';
import Nav from "./Nav"
import {BrowserRouter as Router, Route} from "react-router-dom"
import QuestionOverview from "./QuestionOverview"
import Login from "./Login"
import NewQuestion from "./NewQuestion"
import QuestionDetails from "./QuestionDetails"
import LeaderBoard from "./LeaderBoard"
import {handleInitialData} from "../actions/shared"
import NotFoundPage from "./NotFoundPage"
import SecretRoute from "./SecretRoute"
import connect from "react-redux/lib/connect/connect"

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
            <Router>
              <Fragment>
                <Nav/>
                <div className="app-container">
                    <Route path="/login" component={Login}/>
                    <SecretRoute path="/" exact innerComp={QuestionOverview}/>
                    <SecretRoute path="/add" innerComp={NewQuestion}/>
                    <SecretRoute path="/questions/:question_id" innerComp={QuestionDetails}/>
                    <SecretRoute path="/leaderboard" innerComp={LeaderBoard}/>
                    <SecretRoute path="/404" innerComp={NotFoundPage}/>
                </div>
              </Fragment>
            </Router>
    );
  }
}

export default connect()(App);

