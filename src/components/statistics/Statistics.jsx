import React, { Component } from 'react';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className="statistics-block">
      <h2>Statistics</h2>
      <span className="span">Good: {good}</span>
      <span> Neutral: {bad}</span>
      <span> Bad: {neutral}</span>
      <span> Total: {total}</span>
      <span> Positive percentage: {positivePercentage} %</span>
    </div>
  );
};
