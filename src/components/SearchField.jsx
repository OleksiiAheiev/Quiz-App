import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { categoriesAction } from '../store/modules/categories';

const Search = styled('div')(() => ({
  width: '75%',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '30px',
}));

const StyledTextField = styled(TextField)(() => ({
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: '30px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderRadius: '30px',
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    borderRadius: '30px',
    color: '#6c4298',
    '&.Mui-focused': {
      color: '#6c4298',
    },
  },
}));

function SearchField() {
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    dispatch(categoriesAction.filterCategories({ search: event.target.value }));
  };

  return (
    <Search>
      <StyledTextField
        label="Search quizzes for any topic"
        variant="outlined"
        size="medium"
        onChange={handleChangeSearch}
      />
    </Search>
  );
}

export default SearchField;
