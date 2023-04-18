import { Button, styled } from '@mui/material';

export const StyledBtn = styled(Button)(() => ({
  marginBottom: '20px',
  display: 'block',
  width: '170px',
  color: '#6c4298',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
  '&.MuiButton-outlined': {
    borderColor: '#6c4298',
    color: '#6c4298',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#fff',
  },
}));

export const QuizButton = styled(Button)(() => ({
  width: '110px',
  backgroundColor: '#6c4298',
  color: '#fff',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
}));

export const ResultButton = styled(Button)(() => ({
  maxWidth: '150px',
  backgroundColor: '#6c4298',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
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

export const CreateQuizBtn = styled(Button)(() => ({
  width: '200px',
  color: '#6c4298',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#000',
  },
  '&.MuiButton-outlined': {
    borderColor: '#6c4298',
    color: '#6c4298',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: 'rgb(136 84 192 / .8)',
    color: '#fff',
  },
}));
