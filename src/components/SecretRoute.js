import React, {Component} from "react"
import {Redirect, Route} from "react-router-dom"
import connect from "react-redux/lib/connect/connect"

class SecretRoute extends Component {

  render() {
    const {innerComp, ...routeProps} = this.props;
    const InnerComp = innerComp; // renamed in order to use it in jsx
    return (<Route {...routeProps} render={(props) => {
      return (
              this.props.loggedOut === true
                      ? <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                      }} />
                      : <InnerComp {...props} />
      )
    }} />);
  }
}

function mapStateToProps({authedUser}) {
  return {
    loggedOut: authedUser === null,
  }
}

export default connect(mapStateToProps)(SecretRoute);