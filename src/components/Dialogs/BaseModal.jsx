import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 350,
  maxWidth: 450,
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: 24,
}));

function BaseModal({
  open, handleClose, card,
}) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <StyledBox >
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
              <Typography variant="h6">{card.category_name}</Typography>
              <Typography variant="h6">#{+card.id + 1}</Typography>
            </div>
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt={card.quiz_name} />
            <Typography variant="h5" mt={2}>
              Quiz description
            </Typography>
            <Typography
              variant="h6"
              id="keep-mounted-modal-description"
              sx={{ mt: 2 }}>
              {card.description}
            </Typography>
          </Card>
        </StyledBox>
      </Modal>
    </div>
  );
}

export default BaseModal;
