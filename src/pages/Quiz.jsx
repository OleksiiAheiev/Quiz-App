import { useEffect, useState } from 'react';
import { styled, Grid } from '@mui/material';
import Quizzes from '../components/Quizzes';
import {quizes } from '../api/index'

const MainGrid = styled(Grid)(() => ({
    marginTop: '30px',
    marginBottom: '70px',
    gap: '40px',
    justifyContent: 'center',
}));

function Quiz() {
    const [cards, setCards] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const { data } = await quizes.fetchQuestions();
            setCards(data);
        } catch (err) {
            console.error(err);
        }
    })();
}, []);

    return (
        <MainGrid container>
            {cards.map((card, index) => (
                <Grid item key={index} md={4} lg={5} xl={3}>
                    <Quizzes card={card} id={index + 1} />
                </Grid>
            ))}
        </MainGrid>
    );
}

export default Quiz;
