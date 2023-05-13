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
    this.feedback =
      (this.state.good * 100) / (this.state.good + this.state.bad);
    this.feedbackPercentage = parseFloat(this.feedback.toFixed(2));
    return this.feedback;
  };

  render() {
    this.getFeedbackPercentage();
    return (
      <>
        <div className="feedback-options">
          <button
            onClick={() => {
              this.clickHandler('good');
            }}
          >
            Good
          </button>
          <button
            onClick={() => {
              this.clickHandler('neutral');
            }}
          >
            Neutral
          </button>
          <button
            onClick={() => {
              this.clickHandler('bad');
            }}
          >
            Bad
          </button>
        </div>
        <div className="statistics">
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.feedbackPercentage}
          />
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
