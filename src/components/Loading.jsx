import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

function CircularIndeterminate() {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
}

export default CircularIndeterminate;
