import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import NavMenu from './NavMenu';

const Body = styled(Box)(() => ({
  padding: '20px',
  height: '100%',
}));

function MainTemplate({ children }) {
  return (
    <>
      <NavMenu />
      <div className="main">
        <Header />
        <Body>
          {children}
        </Body>
        <Footer />
      </div>
    </>
  );
}

export default MainTemplate;
