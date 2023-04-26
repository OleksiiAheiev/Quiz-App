import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import BaseModal from './Dialogs/BaseModal';
import RadioButtonsGroup from './RadioButtonsGroup';
import Timer from './Timer';

const QuizCard = styled(Card)(() => ({
  position: 'relative',
  width: '330px',
  borderRadius: '5px',
  height: '100%',
  padding: '0 15px',
  '@media (min-width: 768px)': {
    width: '700px',
  },
}));

export const QuestionBtn = styled(Button)(() => ({
  border: '#6c4298 1px solid',
  backgroundColor: '#6c4298',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
}));

function Question({
  cards,
  activeQuestion,
  handleNextCard,
  handleAnswerSelect,
  selectedAnswerIndex,
  seconds,
}) {
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const isLastCard = activeQuestion === cards.length - 1;
  const currentCard = cards[activeQuestion];

  const {
    question,
    choices,
    image,
    quiz_name,
  } = currentCard;

  return (
    <>
      <QuizCard card={currentCard} key={currentCard.id}>
        <div
          className="d-flex" >
          <h5>{quiz_name}</h5>
          <h5>#{`${currentCard.id + 1} / ${cards.length}`}</h5>
        </div>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={quiz_name} />
        <CardContent sx={{ mb: 3 }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
            }}
          >
            {question}
            <Timer seconds={seconds} />
          </Typography>
          <RadioButtonsGroup options={choices} handleAnswerSelect={handleAnswerSelect} />
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <QuestionBtn
            onClick={handleOpen}
            variant="outlined"
          >
            <Typography>Show More</Typography>
          </QuestionBtn>
          <QuestionBtn
            variant="outlined"
            onClick={handleNextCard}
            disabled={selectedAnswerIndex === null}
          >
            {isLastCard ? 'Finish' : 'Next'}
          </QuestionBtn>
        </CardActions>
        <BaseModal open={modal} handleClose={handleClose} card={currentCard} />
      </QuizCard >
    </>
  );
}

export default Question;
