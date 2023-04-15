import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { categoriesThunks } from '../../store/modules/categories';
import logo from '../../logo.webp';
import CategoryBtns from '../CategoryBtns';
import { QuizButton } from '../styled/buttons';
import { ButtonWrapper, NavWrapper } from '../styled/wrappers';

function NavMenu() {
  const { categories } = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(categoriesThunks.fetchCategories());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <NavWrapper
      className="nav-menu"
      sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer',
        }}
        to={'/'}
      >
        <img
          style={{ padding: '0 30px', width: '100px' }}
          src={logo}
          alt="logo" />
      </Link>
      <ButtonWrapper>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
          to={'/create'}
        >
          <QuizButton
            variant="contained"
            size="small"
          >
            <Typography fontSize='small'>Create Quiz</Typography>
          </QuizButton>
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
          to={'/favorite'}
        >
          <QuizButton
            variant="contained"
            size="small"
          >
            <Typography fontSize='small'>Favorite</Typography>
          </QuizButton>
        </Link>
      </ButtonWrapper>
      {categories.map((category, index) => (
        <CategoryBtns category={category} id={index} key={index} />
      ))}
    </NavWrapper>
  );
}

export default NavMenu;
