import { useState } from 'react';
import {Box, Typography, Modal, IconButton, TextareaAutosize} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid rgb(128,0,64)',
  boxShadow: 24,
  p: 4,
  borderRadius:5
};

export default function MyModal(props) {
 const {open, setOpen, description, setDescription} = props;
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton sx={{float:'right'}} onClick={() => setOpen(false)}>
              <CancelPresentationIcon />
            </IconButton>
          <Box sx={{marginTop:5}}>
            <Typography id="modal-modal-description" sx={{ mt: 2, marginBottom:3 }}>
              {description}
            </Typography>
          </Box>
          <Box sx={{display:'flex'}}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Edit Description"
              style={{ width: 350, height:50 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <IconButton sx={{color:'rgb(128,0,64)'}}>
                <PublishedWithChangesIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}