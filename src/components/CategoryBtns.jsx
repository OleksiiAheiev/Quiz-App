import React from 'react';
import { Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const StyledBtn = styled(Button)(() => ({
  marginBottom: '20px',
  display: 'block',
  width: '170px',
  color: '#6c4298',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
  '&.MuiButton-outlined': {
    borderColor: '#6c4298',
    color: '#6c4298',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#fff',
  },
}));

function CategoryBtns({ category, id }) {
  const pathQuiz = category.category_name.split(' ').join('_').toLowerCase();

  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={`/quiz/${pathQuiz}`}>
      <StyledBtn variant='outlined' value={id}>
        <Typography fontSize='14px'>{category.category_name}</Typography>
      </StyledBtn>
    </Link>

  );
}

export default CategoryBtns;
