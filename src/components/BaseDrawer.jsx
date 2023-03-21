import { Component } from 'react';
import {
    Box,
    Button,
    Drawer,
    Grid,
    Typography
} from '@mui/material';
import Categories from './Categories';
import logo from '../logo.webp';
import { quizes } from '../api/api';
class BaseDrawer extends Component {
    state = {
        categories: [],
    };

    render() {
        const { categories } = this.state;
        const { open, handleClose } = this.props;
        
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
                        {categories.map(category => (
                            <Categories category={category} id={category.id} key={category.id} />
                        ))}
                    </Grid>
                </Box>
            </Drawer>
        );
    }

    componentDidMount() {
        quizes
            .fetchCategories()
            .then(categories => this.setState({ ...this.state, categories }))
            .catch(err => console.error(err));
    }
}

export default BaseDrawer;
