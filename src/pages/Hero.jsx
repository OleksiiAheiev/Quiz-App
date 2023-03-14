import { useEffect, useState } from 'react';
import { styled, Box } from '@mui/material';
import axios from 'axios';
import API from '../components/variables';
import Cards from '../components/Cards';

const MainWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 320px)',
    margin: '50px 60px',
    gap: '90px',
}));

function Hero() {
    let [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${API}/questions`);
            setCards(data);
        })();
    }, []);

    return (
        <MainWrapper>
            {cards.map((card, index) => (
                <Cards key={index} card={card} id={index + 1} />
            ))}
        </MainWrapper>
    );
}

export default Hero;
