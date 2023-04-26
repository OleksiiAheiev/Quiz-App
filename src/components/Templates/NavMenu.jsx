import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import {
  Box, Button, Typography,
} from '@mui/material';
import logo from '../../logo.webp';
import CategoryBtns from '../CategoryBtns';

export const QuizButton = styled(Button)(() => ({
  width: '110px',
  backgroundColor: '#6c4298',
  color: '#fff',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
}));

export const NavWrapper = styled(Box)(() => ({
  padding: '0 30px',
  backgroundColor: '#fff',
}));

export const ButtonWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#e5e5e5',
  padding: '20px 30px 0',
  borderRadius: '10px',
  marginBottom: '20px',
}));

export const ImgBox = styled(Box)(() => ({
  padding: '0 30px',
  width: '100px',
  height: '90px',
}));

export const ImgStyle = styled.img(() => ({
  width: '100px',
  height: '90px',
}));

function NavMenu() {
  const { categories } = useSelector((state) => state.categoriesReducer);

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
        to={'/home'}
      >
        <ImgBox>
          <ImgStyle
            src={logo}
            alt="logo" />
        </ImgBox>
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
