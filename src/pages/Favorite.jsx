import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import CategoryQuiz from '../components/CategoryQuiz';

const StyledBox = styled(Box)(() => ({
  marginTop: '50px',
  marginBottom: '30px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledGrid = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
}));

const StyledGridItem = styled(Box)(({ theme }) => ({
  minWidth: '300px',
  [theme.breakpoints.up('md')]: {
    minWidth: '300px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '285px',
  },
}));

const StyledText = styled(Typography)(() => ({
  marginBottom: '20px',
  fontWeight: 'bold',
  color: '#6c4298',
}));

function Favorite() {
  const [favoriteCategories, setFavoriteCategories] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCategories(favorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favoriteCategories.filter((category) => category.id !== id);
    setFavoriteCategories(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <StyledBox>
      <StyledText>
        Your favorites list
      </StyledText>
      {favoriteCategories.length === 0 ? (
        <StyledText>
          You haven`t added any favorite categories yet.
        </StyledText>
      ) : (
        <StyledGrid>
          {favoriteCategories.map((card) => (
            <StyledGridItem key={card.id}>
              <CategoryQuiz card={card} removeFavorite={() => removeFavorite(card.id)} />
            </StyledGridItem>
          ))}
        </StyledGrid>
      )}
    </StyledBox>
  );
}

export default Favorite;
