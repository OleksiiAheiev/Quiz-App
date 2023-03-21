import { Component } from 'react';
import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BaseDrawer from './BaseDrawer';

const HeaderStyles = styled(Box)(() => ({
    paddingLeft: '2px',
    flexGrow: 1,
    zIndex: '100',
}));
class Header extends Component {
    state = {
        isDrawerOpen: false,
    };

    constructor() {
        super();

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <>
                <HeaderStyles>
                    <AppBar position="static" sx={{ boxShadow: '0px 4px 4px -2px #ababab' }}>
                        <Toolbar sx={{ background: '#fff', color: '#6c4298' }}>
                            <IconButton
                                onClick={this.handleOpen}
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
                                Let's start the Quiz!
                            </Typography>
                            <Typography variant="h5" component="div">
                                QUIZZ
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </HeaderStyles>
                <BaseDrawer open={isDrawerOpen} handleClose={this.handleClose} />
            </>
        );
    }

    handleOpen() {
        this.setState({ isDrawerOpen: true });
    }

    handleClose() {
        this.setState({ isDrawerOpen: false });
    }
}

export default Header;
