import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import BaseModal from './Dialogs/BaseModal';

const CardStyle = styled(Card)(() => ({
  maxWidth: '400px',
  maxHeight: '100%',
  padding: '10px',
  fontWeight: 'bold',
}));

function CategotyQuiz({ card, id }) {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const pathQuiz = card.category_name.split(' ').join('_').toLowerCase();

  return (
    <CardStyle>
      <div className='d-flex'>
        <h5>{card.category_name}</h5>
        <h5>#{+id + 1}</h5>
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

export default CategotyQuiz;
