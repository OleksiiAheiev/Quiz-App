import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CategoryQuiz from '../components/CategoryQuiz';
import SearchField from '../components/Forms/SearchField';
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

const StyledStack = styled(Stack)(() => ({
  marginBottom: '30px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledGrid = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '30px',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const StyledGridItem = styled(Box)(() => ({
  minWidth: '330px',
  '@media (min-width: 750px)': {
    minWidth: '300px',
  },
  '@media (min-width: 1024px)': {
    minWidth: '300px',
  },
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
      <StyledStack>
        <Typography
          sx={{
            mb: 3,
            color: '#6c4298',
            fontWeight: 'bold',
          }}>
          What will you study today?
        </Typography>
        <SearchField />
      </StyledStack>
      <StyledGrid>
        {filterCategories.map((card) => (
          <StyledGridItem key={card.id}>
            <CategoryQuiz card={card} />
          </StyledGridItem>
        ))}
      </StyledGrid>
    </StyledHomePage>
  );
}

export default HomePage;
