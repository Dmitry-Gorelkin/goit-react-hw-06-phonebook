import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { FilterConteiner, Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handelFilter = e => {
    dispatch(addFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterConteiner>
      <Title>Find contacts by name</Title>
      <input type="text" name="filter" onChange={handelFilter} />
    </FilterConteiner>
  );
};
