import React, { Component } from "react";
import './feedback.css';

export class Feedback extends Component {
constructor(props) {
    super(props);
    this.state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
}
       
clickGood = () => {
    this.setState({good: this.state.good+1});
   }
   clickNeutral = () => {
    this.setState({neutral: this.state.neutral+1});
   }

   clickBad = () => {
    this.setState({bad: this.state.bad+1});
   }


    render() {
        return (
        <div className="feedback">
            <h2>Please leave feedback</h2>
            <button  onClick={this.clickGood}>Good</button>
            <button onClick={this.clickNeutral}>Neutral</button>
            <button onClick={this.clickBad}>Bad</button>
            <h2>Statistics</h2>
        <span className="span">Good: {this.state.good}</span>
        <span> Neutral: {this.state.neutral}</span>
        <span> Bad: {this.state.bad}</span>
               </div>
        )
        }
      }