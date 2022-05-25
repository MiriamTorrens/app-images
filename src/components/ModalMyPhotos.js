import { useState, useEffect } from 'react';
import { editDescription, favourites } from '../slices/myPhotosSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Typography, Modal, IconButton, TextareaAutosize} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 290,
  bgcolor: 'background.paper',
  border: '3px solid rgb(128,0,64)',
  boxShadow: 24,
  p: 4,
  borderRadius:5
};

export default function ModalMyPhotos(props) {
  const dispatch = useDispatch();
  const favouritesPhotos = useSelector(favourites);
  const {open, setOpen, currentPhoto} = props;
  const [description, setDescription] = useState("");
 
  const handleClickDescription = () => {
    const currentImage = {
      id: currentPhoto.id,
      description: description
    }
    if(description && description.length){
      dispatch(editDescription(currentImage));
    }
    setDescription(""); 
  }
  useEffect(() => {
    setOpen(false);
 },[favouritesPhotos]);
 
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
            <Box sx={{marginTop:5, display:'flex'}}>
              <Box><img src={currentPhoto.urlsFull} style={{width:150}} alt={currentPhoto.description}/></Box>
              <Typography id="modal-modal-description" sx={{ marginLeft:2 }}>
                <span style={{color:'rgb(128,0,64)'}}>Id image: </span>{currentPhoto.id}<br/>
                <span style={{color:'rgb(128,0,64)'}}>Likes:</span> {currentPhoto.likes}<br/>
                <span style={{color:'rgb(128,0,64)'}}>Width:</span> {currentPhoto.width}<br/>
                <span style={{color:'rgb(128,0,64)'}}>Height:</span> {currentPhoto.height}<br/>
                <span style={{color:'rgb(128,0,64)'}}>Description:</span> {currentPhoto.description}
              </Typography>
            </Box>
            <Box sx={{display:'flex', marginTop:3}}>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Edit Description"
                style={{ width: 350, height:50 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <IconButton sx={{color:'rgb(128,0,64)'}} onClick={() => handleClickDescription()}>
                  <PublishedWithChangesIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </>
    );
}