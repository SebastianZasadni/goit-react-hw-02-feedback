import React, { Component } from 'react';

import { Statistics } from 'components/feedback/statistics/Statistics';

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

  clickGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  clickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  clickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    if (this.percentage === undefined) {
      return (this.percentage = null);
    }
    this.percentage =
      (this.state.good * 100) / (this.state.good + this.state.bad);
    this.positiveFeedback = parseFloat(this.percentage.toFixed(2));
  };

  render() {
    this.countPositiveFeedbackPercentage();

    return (
      <>
        <div className="feedback-options">
          <button
            onClick={() => {
              this.clickGood();
              this.countTotalFeedback();
            }}
          >
            Good
          </button>
          <button
            onClick={() => {
              this.clickNeutral();
              this.countTotalFeedback();
            }}
          >
            Neutral
          </button>
          <button
            onClick={() => {
              this.clickBad();
              this.countTotalFeedback();
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
            positivePercentage={this.positiveFeedback}
          />
        </div>
      </>
    );
  }
}
