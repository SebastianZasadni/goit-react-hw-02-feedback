import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from 'components/Feedback/Statistics/Statistics';

export class FeedbackOptions extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
  };

  clickHandler = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      total: prevState.total + 1,
    }));
  };

  getFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return parseFloat(((good * 100) / (good + bad + neutral)).toFixed(2)) ?? 0;
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <>
        <div>
          <button onClick={this.clickHandler.bind(this, 'good')}>Good</button>
          <button onClick={this.clickHandler.bind(this, 'neutral')}>
            Neutral
          </button>
          <button onClick={this.clickHandler.bind(this, 'bad')}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.getFeedbackPercentage()}
          />
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
