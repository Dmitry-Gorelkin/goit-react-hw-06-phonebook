import PropTypes from 'prop-types';
import { FilterConteiner, Title } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterConteiner>
      <Title>Find contacts by name</Title>
      <input type="text" name="filter" onChange={onChange} value={value} />
    </FilterConteiner>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
