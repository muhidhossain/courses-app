import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { modalStyle } from '../../utils/commonStyle';

const SuccessModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: 'green', fontWeight: 'bold' }}
          >
            Order pleached successfully!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="font-bold">Your order id: </span>
            <br />
            8174147489707871897
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessModal;
