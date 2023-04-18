import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import NavMenu from './NavMenu';

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  flexGrow: 1,
  overflow: 'hidden',
  flexDirection: 'column',
}));

const Body = styled(Box)(() => ({
  padding: '20px',
  height: '100%',
}));

function MainTemplate({ children }) {
  return (
    <>
      <NavMenu />
      <Wrapper>
        <Header />
        <Body>
          {children}
        </Body>
        <Footer />
      </Wrapper>
    </>
  );
}

export default MainTemplate;
