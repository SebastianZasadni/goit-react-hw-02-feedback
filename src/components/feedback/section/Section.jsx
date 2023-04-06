import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/feedback/feedbackoptions/FeedbackOptions';
import './Section.css';

export const Section = ({ title }) => {
  return (
    <div className="section-feedback">
      <h2>{title}</h2>
      <FeedbackOptions />
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
