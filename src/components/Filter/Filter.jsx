import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
