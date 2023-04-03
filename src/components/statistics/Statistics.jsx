import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <span className="span">Good: {good}</span>
      <span> Neutral: {bad}</span>
      <span> Bad: {neutral}</span>
      <span> Total: {total}</span>
      <span> Positive percentage: {positivePercentage} %</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
