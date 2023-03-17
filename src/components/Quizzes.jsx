import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import RadioButtonsGroup from './RadioButtonsGroup';
import BaseModal from './BaseModal';
import DescriptionAlerts from './DescriptionAlert';
import typeQuiz from './constants';

const CardStyle = styled(Card)(() => ({
    position: 'relative',
    maxWidth: '350px',
    height: '100%',
    padding: '10px',
    fontWeight: 'bold',
}));

function Quizzes({ card, id }) {
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    const [showAlert, setShowAlert] = useState(false);
    const handleQuizStart = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return (
        <>
            <CardStyle>
                <div className="d-flex">
                    <h5>{typeQuiz[card.category_id]}</h5>
                    <h5>#{id}</h5>
                </div>
                <CardMedia
                    component="img"
                    height="194"
                    image={card.image}
                    alt={typeQuiz[card.category_id]} />
                <CardContent sx={{ mb: 3 }}>
                    <Typography fontWeight="bold">{card.question}</Typography>
                    <RadioButtonsGroup options={card.choices} />
                </CardContent>
                <CardActions style={{ position: 'absolute', bottom: 2, gap: 5 }}>
                    <Button
                        onClick={handleQuizStart}
                        sx={{
                            border: '#6c4298 1px solid',
                            backgroundColor: '#6c4298',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgb(136 84 192 / .8)',
                                color: '#000',
                            },
                        }}
                        size="small"
                        type="submit"
                        variant="outlined"
                    >
                        <Typography>Start quiz</Typography>
                    </Button>
                    <Button
                        onClick={handleOpen}
                        sx={{
                            border: '#6c4298 1px solid',
                            backgroundColor: '#6c4298',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgb(136 84 192 / .8)',
                                color: '#000',
                            },
                        }}
                        size="small"
                        type="submit"
                        variant="outlined"
                    >
                        <Typography>Show More</Typography>
                    </Button>
                </CardActions>
                <BaseModal open={modal} handleClose={handleClose} card={card} />
            </CardStyle>
            {showAlert && <DescriptionAlerts />}
        </>
    );
}

export default Quizzes;
