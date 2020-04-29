import React, {Component} from 'react';

class ResultBar extends Component {
  render() {
    const {optionText, usersChoice, countOfOptionVotes, countOfallVotes} = this.props;
    const percentage = ((countOfOptionVotes / countOfallVotes) * 100).toFixed(2);

    return (
            <div className="result-option">
              <div className="label">{optionText} {usersChoice ? <strong>(your answer)</strong> : null}</div>
              <div className="bar-container">
                <div className="bar" style={{width: `${percentage}%`}}>{percentage}%</div>
              </div>
              <div className="bold">{`${countOfOptionVotes} out of ${countOfallVotes}`}</div>
            </div>
    );
  }
}

export default ResultBar;