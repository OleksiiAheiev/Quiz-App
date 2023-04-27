import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionBtn } from '../components/Question';

const Container = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5',
}));

const Text = styled(Typography)(() => ({
  fontSize: '48px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#6c4298',
}));

function NotFound() {
  return (
    <Container>
      <Text variant="h1" component="div">
        <Text>404</Text>
        <Text>We`re sorry</Text>
        <Text>We can`t find the page you`re looking for</Text>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
          to={'/'}
        >
          <QuestionBtn
            variant="contained"
            size="small"
          >
            <Typography fontSize='medium'>Let`s go Home</Typography>
          </QuestionBtn>
        </Link>
      </Text>
    </Container>
  );
}

export default NotFound;
