import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import BaseModal from './Dialogs/BaseModal';

const CardStyle = styled(Card)(() => ({
  maxWidth: '400px',
  maxHeight: '100%',
  padding: '10px',
  fontWeight: 'bold',
}));

function CategoryQuiz({ card, removeFavorite }) {
  const [modal, setModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some((favorite) => favorite.id === card.id);
  });
  const pathQuiz = card.category_name.split(' ').join('_').toLowerCase();

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteIndex = favorites.findIndex((favorite) => favorite.id === card.id);
    if (favoriteIndex === -1) {
      // Add the card to favorites
      favorites.push(card);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      // Remove the card from favorites
      favorites.splice(favoriteIndex, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(false);
      if (removeFavorite) removeFavorite(card.id);
    }
  };

  return (
    <CardStyle>
      <div className='d-flex'>
        <h5>{card.category_name}</h5>
        <IconButton
          onClick={handleToggleFavorite}
          aria-label="add to favorites"
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: '#6c4298' }} />
          ) : (
              <FavoriteBorderIcon sx={{ color: '#6c4298' }} />
          )}
        </IconButton>
      </div>
      <CardMedia
        component='img'
        height='194'
        image={card.image}
        alt={card.category_name} />
      <CardContent>
        <Typography>
          {card.description.slice(0, 40)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            border: '#6c4298 1px solid',
            backgroundColor: '#6c4298',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgb(136 84 192 / .8)',
              color: '#000',
            },
          }}
          size='small'
          variant='outlined'
        >
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/quiz/${pathQuiz}`}>
            <Typography>
              Start quiz
            </Typography>
          </Link>
        </Button>
        <Button
          onClick={handleOpen}
          sx={{
            border: '#6c4298 1px solid',
            backgroundColor: '#6c4298',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgb(136 84 192 / .8)',
              color: '#000',
            },
          }}
          size='small'
          variant='outlined'
        >
          <Typography>Show More</Typography>
        </Button>
      </CardActions>
      <BaseModal open={modal} handleClose={handleClose} card={card} />
    </CardStyle>
  );
}

export default CategoryQuiz;
