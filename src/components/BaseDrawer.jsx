import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    Grid,
    Typography
} from '@mui/material';
import Categories from './Categories';
import logo from '../logo.webp';
import { quizes } from '../api';

function BaseDrawer({ open, handleClose }) {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await quizes.fetchCategories()
                setCategories(data)
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <Drawer anchor="left" open={open} onClose={handleClose}>
            <Box p={4} width="200px">
                <img style={{ width: '120px' }} src={logo} alt="logo" />
                <Grid sx={{ mb: 3 }}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: '#6c4298',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgb(136 84 192 / .8)',
                                color: '#000',
                            },
                            mb: 3,
                        }}
                    >
                        <Typography>Create Quiz</Typography>
                    </Button>
                    {categories.map((category, index) => (
                        <Categories category={category} id={index} key={index} />
                    ))}
                </Grid>
            </Box>
        </Drawer>
    );
}

export default BaseDrawer;
