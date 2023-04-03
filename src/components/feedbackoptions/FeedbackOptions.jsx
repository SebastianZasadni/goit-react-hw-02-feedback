import React, { Component } from 'react';

import { Statistics } from 'components/statistics/Statistics';

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

  clickGood = evt => {
    this.setState({ good: this.state.good + 1 });
  };
  clickNeutral = evt => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  clickBad = evt => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = evt => {
    this.setState({ total: this.state.total + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    if (this.percentage === undefined) {
      return (this.percentage = null);
    }
    this.percentage =
      (this.state.good * 100) / (this.state.good + this.state.bad);
  };

  render() {
    this.countPositiveFeedbackPercentage();

    return (
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

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.percentage}
        />
      </div>
    );
  }
}
