import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import logo from '../logo.jpg';
import axios from 'axios';
import API from './variables';
import Categories from './Categories';

const NavWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    paddingLeft: '40px',
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

function NavMenu() {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${API}/categories`);
            setCategories(data);
        })();
    }, []);

    return (
        <NavWrapper
            className="nav-menu"
            sx={{
                '& > *': { mb: 3.1 },
                '& > *:last-child': { my: 0 },
            }}
        >
            <img style={{ width: '120px' }} src={logo} alt="logo" />

            <QuizButton variant="contained" size="medium">
                <Typography>Create Quiz</Typography>
            </QuizButton>

            {categories.map((category, index) => (
                <Categories key={index} category={category} id={index} />
            ))}
        </NavWrapper>
    );
}

export default NavMenu;
