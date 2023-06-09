import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BaseDrawer from '../BaseDrawer';

const HeaderStyles = styled(Box)(() => ({
  paddingLeft: '2px',
  zIndex: '100',
}));

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  return (
    <>
      <HeaderStyles>
        <AppBar position="static" sx={{ boxShadow: '0px 4px 4px -2px #ababab' }}>
          <Toolbar sx={{ background: '#fff', color: '#6c4298' }}>
            <IconButton
              onClick={handleOpen}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1, display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
            >
              Let`s start the Quiz!
            </Typography>
            <Link style={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
              to={'/home'}>
              <Typography variant="h5">
                QUIZZ
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </HeaderStyles>
      <BaseDrawer open={isDrawerOpen} handleClose={handleClose} />
    </>
  );
}

export default Header;
