import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderStyles = styled(Box)(() => ({
    paddingLeft: '2px',
    height: '50px',
    flexGrow: 1,
    zIndex: '100',
}));

function Header() {
    return (
        <HeaderStyles>
            <AppBar position="static" sx={{ boxShadow: '0px 4px 4px -2px #ababab' }}>
                <Toolbar sx={{ background: '#fff', color: '#6c4298' }}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Let's start the Quiz!
                    </Typography>
                    <Typography variant="h5" component="div">
                        QUIZZ
                    </Typography>
                </Toolbar>
            </AppBar>
        </HeaderStyles>
    );
}

export default Header;
