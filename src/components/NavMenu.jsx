import { Component } from 'react';
import { Box, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import logo from '../logo.webp';
import Categories from './Categories';
import { quizes } from '../api/api';

const NavWrapper = styled(Box)(() => ({
    width: '250px',
    paddingLeft: '30px',
    paddingTop: '15px',
    backgroundColor: '#fff',
}));

const QuizButton = styled(Button)(() => ({
    width: 150,
    backgroundColor: '#6c4298',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgb(136 84 192 / .8)',
        color: '#000',
    },
}));
class NavMenu extends Component {
    state = {
        categories: [],
    };

    render() {
        const { categories } = this.state;
        
        return (
            <NavWrapper className="nav-menu" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
                <img style={{ width: '120px' }} src={logo} alt="logo" />
                <QuizButton variant="contained" size="small" sx={{ mb: 3 }}>
                    <Typography>Create Quiz</Typography>
                </QuizButton>
                {categories.map((category) => (
                    <Categories category={category} id={category.id} key={category.id} />
                ))}
            </NavWrapper>
        );
    }

    componentDidMount() {
        quizes
            .fetchCategories()
            .then(categories => this.setState({ ...this.state, categories }))
            .catch(err => console.error(err));
    }
}

export default NavMenu;
