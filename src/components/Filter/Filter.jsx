import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import StyledFilter from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const target = event.target.value.trim();
    dispatch(setFilter(target));
  };

  return (
    <StyledFilter>
      {/* Find contacts by name */}
      <TextField
        sx={{ color: 'white' }}
        label="Find contacts by name..."
        variant="outlined"
        onChange={handleFilterChange}
        type="search"
        name="filter"
        value={filter}
      />
    </StyledFilter>
  );
};

export default Filter;
