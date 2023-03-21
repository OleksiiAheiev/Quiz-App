import { Component } from 'react';
import { styled, Grid } from '@mui/material';
import Quizzes from '../components/Quizzes';
import { quizes } from '../api/api';

const MainGrid = styled(Grid)(() => ({
    marginTop: '30px',
    marginBottom: '70px',
    gap: '40px',
    justifyContent: 'center',
}));

class Quiz extends Component {
    state = {
        cards: [],
    };

    render() {
        const { cards } = this.state;
        
        return (
            <MainGrid container>
                {cards.map((card, index) => (
                    <Grid item key={index} md={4} lg={5} xl={3}>
                        <Quizzes card={card} id={card.id + 1} />
                    </Grid>
                ))}
            </MainGrid>
        );
    }

    componentDidMount() {
        quizes
            .fetchQuestions()
            .then(cards => this.setState({ ...this.state, cards }))
            .catch(err => console.error(err));
    }
}

export default Quiz;
