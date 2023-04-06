import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import CategotyQuiz from '../components/CategotyQuiz';
import SearchField from '../components/SearchField';
import { categoriesThunks } from '../store/modules/categories';

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
  const { filterCategories } = useSelector((state) => state.categoriesReducer);
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
        {filterCategories.map((card) => (
          <div className='main-screen-grid__item' key={card.id}>
            <CategotyQuiz card={card} id={card.id} />
          </div>
        ))}
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
