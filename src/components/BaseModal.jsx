import { Component } from 'react';
import {
    Box,
    Card,
    CardMedia,
    IconButton,
    Modal,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import typeQuiz from './constants';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
};
class BaseModal extends Component {
    render() {
        const { open, handleClose, card } = this.props;
        
        return (
            <div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: -3,
                                top: -3,
                                color: '#000',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Card sx={{ bgcolor: 'rgb(136 84 192 / .2)', p: 3 }}>
                            <div className="d-flex">
                                <Typography variant="h6">{typeQuiz[card.category_id]}</Typography>
                                <Typography variant="h6">#{card.id + 1}</Typography>
                            </div>
                            <CardMedia
                                component="img"
                                height="194"
                                image={card.image}
                                alt={typeQuiz[card.category_id]}
                            />
                            <Typography variant="h5" mt={2}>
                                Quiz description
                            </Typography>
                            <Typography variant="h6" id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                {card.description}
                            </Typography>
                            <Typography variant="h6" id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Quiz difficulty: <span style={{ fontWeight: 'bold' }}>{card.difficulty}</span>
                            </Typography>
                        </Card>
                    </Box>
                </Modal>
            </div>
        );
    }
}

export default BaseModal;
