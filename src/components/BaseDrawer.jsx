import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import CategoryBtns from './CategoryBtns';
import logo from '../logo.webp';
import {
  QuizButton, ButtonWrapper, ImgBox, ImgStyle,
} from './Templates/NavMenu';

function BaseDrawer({ open, handleClose }) {
  const { categories } = useSelector((state) => state.categoriesReducer);
  return (
    <Drawer anchor="left"
      open={open}
      onClose={handleClose}>
      <Box p={2}>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
          to={'/'}>
          <ImgBox>
            <ImgStyle
              src={logo}
              alt="logo" />
          </ImgBox>
        </Link>

        <Grid sx={{ mb: 3 }}>
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
        </Grid>
      </Box>
    </Drawer>
  );
}

export default BaseDrawer;
