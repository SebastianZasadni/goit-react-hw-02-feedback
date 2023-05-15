import PropTypes from 'prop-types';
import { Notification } from 'components/Feedback/Notification/Notification';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <div>
      <span >Good: {good}</span>
      <span> Neutral: {neutral}</span>
      <span> Bad: {bad}</span>
      <span> Total: {total}</span>
      <span> Positive feedback: {positivePercentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
