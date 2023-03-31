import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import CategoryBtns from './CategoryBtns';
import logo from '../logo.webp';
import { quizes } from '../api/api';

const QuizButton = styled(Button)(() => ({
  width: '110px',
  backgroundColor: '#6c4298',
  color: '#fff',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
}));

const ButtonWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#e5e5e5',
  padding: '20px 30px 0',
  borderRadius: '10px',
  marginBottom: '20px',
}));

function BaseDrawer({ open, handleClose }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizes.fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
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
          to={'/quiz'}>
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
              to={'quiz/create'}
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
              to={'quiz/favorite'}
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
