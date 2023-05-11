import PropTypes from 'prop-types';
import { FeedbackOptions } from 'components/feedback/FeedbackOptions/FeedbackOptions';
import css from './Section.module.css';

export const Section = ({ title }) => {
  return (
    <div className={css.sectionfeedback}>
      <h2>{title}</h2>
      <FeedbackOptions />
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
