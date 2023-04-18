import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledBtn } from './styled/buttons';

function CategoryBtns({ category, id }) {
  const pathQuiz = category.category_name.split(' ').join('_').toLowerCase();

  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={`quiz/${pathQuiz}`}>
      <StyledBtn variant='outlined' value={id}>
        <Typography fontSize='14px'>{category.category_name}</Typography>
      </StyledBtn>
    </Link>

  );
}

export default CategoryBtns;
