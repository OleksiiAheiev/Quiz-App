import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CategotyQuiz from '../components/CategotyQuiz';
import { quizes } from '../api/api';
import SearchField from '../components/SearchField';

const StyledHomePage = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '65vh',
  padding: '0 15px',
  marginTop: '50px',
  marginBottom: '50px',
}));

const StyledBox = styled(Box)(() => ({
  marginBottom: '30px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

function HomePage() {
  const [allQuizes, setAllQuizes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizes.fetchCategories();
        setAllQuizes(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <StyledHomePage>
      <StyledBox>
        <Typography
          sx={{
            mb: 3,
            color: '#6c4298',
            fontWeight: 'bold',
          }}>
          What will you study today?
        </Typography>
        <SearchField />
      </StyledBox>
      <div className='main-screen-grid'>
        {allQuizes.map((card) => (
          <div className='main-screen-grid__item' key={card.id}>
            <CategotyQuiz card={card} id={card.id} />
          </div>
        ))}
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
