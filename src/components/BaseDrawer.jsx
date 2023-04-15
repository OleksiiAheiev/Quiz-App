import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import CategoryBtns from './CategoryBtns';
import { QuizButton } from './styled/buttons';
import logo from '../logo.webp';
import { categoriesThunks } from '../store/modules/categories';
import { ButtonWrapper } from './styled/wrappers';

function BaseDrawer({ open, handleClose }) {
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
          <img
            style={{ padding: '0 30px', width: '100px' }}
            src={logo}
            alt="logo" />
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
