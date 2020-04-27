import React, {Fragment} from 'react';
import Nav from "./Nav"
import {BrowserRouter as Router, Route} from "react-router-dom"
import QuestionOverview from "./QuestionOverview"
import Login from "./Login"
import NewQuestion from "./NewQuestion"
import QuestionDetails from "./QuestionDetails"
import LeaderBoard from "./LeaderBoard"
import Logout from "./Logout"

function App() {
  return (
          <Router>
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
          </Router>
  );
}

export default App;
