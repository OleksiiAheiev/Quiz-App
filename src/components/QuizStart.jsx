import React from 'react';
import {
  Box, Typography, styled,
} from '@mui/material';
import { StyledBtn } from './styled/buttons';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '10px',
  padding: '10px 20px 0',
  '& > *': {
    margin: '16px 0',
  },
}));

const StyledText = styled(Typography)(() => ({
  color: '#6c4298',
}));

function QuizStart({ setIsStarted, setTime }) {
  const handleQuizStart = () => {
    setIsStarted(true);
    setTime(0);
  };

  return (
    <StyledBox>
      <StyledText variant='h4'>
        Let`s start the Quiz!
      </StyledText>
      <StyledText variant='h5'>
        Do you want to take a break from routine work and spend time with benefit?
      </StyledText>
      <StyledBtn onClick={handleQuizStart}>
        Start
      </StyledBtn>
    </StyledBox>
  );
}

export default QuizStart;
