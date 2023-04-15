import React from 'react';
import styled from '@emotion/styled';
import {
  Card,
  Typography,
} from '@mui/material';
import getFormattedTime from '../../helper';
import { ResultButton } from '../styled/buttons';

const StyledResult = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minWidth: '300px',
  padding: '40px',
}));

const StyledHeader = styled(Typography)(() => ({
  textAlign: 'center',
}));

const StyledP = styled.p(() => ({
  fontWeight: 'bold',
  fontSize: '16px',
}));

const StyledSpan = styled.span(() => ({
  fontWeight: 'bold',
  fontSize: '22px',
  color: '#800080',
}));

function QuizResults({ result, cards }) {
  return (
    <StyledResult>
      <StyledHeader variant="h4">Results:</StyledHeader>
      <StyledP>
        Total time: <StyledSpan>{getFormattedTime(result.quizTime)}</StyledSpan>
      </StyledP>
      <StyledP>
        Total Question: <StyledSpan>{cards.length}</StyledSpan>
      </StyledP>
      <StyledP>
        Total Score:<StyledSpan> {result.score}</StyledSpan>
      </StyledP>
      <StyledP>
        Correct Answers:<StyledSpan> {result.correctAnswers}</StyledSpan>
      </StyledP>
      <StyledP>
        Wrong Answers:<StyledSpan> {result.wrongAnswers}</StyledSpan>
      </StyledP>
      <ResultButton variant="contained" onClick={() => window.location.reload()}>
        Restart
      </ResultButton>
    </StyledResult>
  );
}

export default QuizResults;
