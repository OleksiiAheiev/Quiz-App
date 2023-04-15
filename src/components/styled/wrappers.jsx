import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const NavWrapper = styled(Box)(() => ({
  padding: '0 30px',
  backgroundColor: '#fff',
}));

export const ButtonWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#e5e5e5',
  padding: '20px 30px 0',
  borderRadius: '10px',
  marginBottom: '20px',
}));
