import React from 'react';
import {
  Alert,
  Stack,
  AlertTitle,
  styled,
} from '@mui/material';

const AlertStack = styled(Stack)(() => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
}));

function DescriptionAlert() {
  return (
    <AlertStack spacing={2} zIndex={111}>
      <Alert severity="success">
        <AlertTitle>
          The Quizz <strong>is start!</strong>
        </AlertTitle>
      </Alert>
    </AlertStack>
  );
}

export default DescriptionAlert;
