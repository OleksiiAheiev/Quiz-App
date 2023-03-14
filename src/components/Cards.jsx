import styled from '@emotion/styled';
import { Card, CardContent, Typography } from '@mui/material';
import RadioButtonsGroup from './RadioButtonsGroup';

const CardStyle = styled(Card)(() => ({
    width: '300px',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontWeight: 'bold',
}));

const dFlex = {
    display: 'flex',
    justifyContent: 'space-between',
};

function Cards({ card, id }) {
    let topic = card.category_id === 0 ? 'HTML' : card.category_id === 1 ? 'CSS' : card.category_id === 2 ? 'JS' : '';

    return (
        <CardStyle>
            <div style={dFlex}>
                <h5>{topic}</h5>
                <h5>#{id}</h5>
            </div>

            <CardContent>
                <Typography fontWeight="bold">{card.question}</Typography>

                <RadioButtonsGroup options={card.choices} />
            </CardContent>
        </CardStyle>
    );
}

export default Cards;
