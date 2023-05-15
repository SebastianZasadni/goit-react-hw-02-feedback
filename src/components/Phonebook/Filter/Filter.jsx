import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return <input type="text" name="filter" onChange={handleFilter}></input>;
};

Filter.propTypes = {
  addFilter: PropTypes.func,
}