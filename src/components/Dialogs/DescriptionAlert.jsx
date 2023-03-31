import React from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';

function DescriptionAlerts() {
  return (
    <Stack
      className="alertStyles"
      spacing={2}
      zIndex={111}>
      <Alert severity="success">
        <AlertTitle>
          The Quizz <strong>is start!</strong>
        </AlertTitle>
      </Alert>
    </Stack>
  );
}

export default DescriptionAlerts;
