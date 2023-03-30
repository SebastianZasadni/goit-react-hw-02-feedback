import React, { Component } from 'react';
import './feedback.css';

export class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    };
  }

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
    console.log(this.percentage);
    if (this.percentage === undefined) {
      return (this.percentage = '');
    }
    this.percentage =
      (this.state.good * 100) / (this.state.good + this.state.bad);
  };

  render() {
    this.countPositiveFeedbackPercentage();

    return (
      <div className="feedback">
        <h2>Please leave feedback</h2>
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
        <h2>Statistics</h2>
        <span className="span">Good: {this.state.good}</span>
        <span> Neutral: {this.state.neutral}</span>
        <span> Bad: {this.state.bad}</span>
        <span> Total: {this.state.total}</span>
        <span> Percentage: {this.percentage}%</span>
      </div>
    );
  }
}
