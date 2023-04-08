import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const StyledBox = styled(Box)(() => ({
  marginTop: '50px',
  marginBottom: '30px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

function Favorite() {
  return (
    <StyledBox>
      <Typography
        sx={{
          mb: 3,
          color: '#6c4298',
          fontWeight: 'bold',
        }}>
        Your favorites list
      </Typography>
    </StyledBox>

  );
}

export default Favorite;
