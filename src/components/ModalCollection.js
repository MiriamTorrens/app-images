import {
  Box,
  Typography,
  Modal,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { useState, useEffect } from "react";
import { editDescription } from "../slices/collectionSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 280,
  bgcolor: "background.paper",
  border: "5px solid var(--main-color)",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function ModalCollection(props) {
  const { open, handleClose, currentPhoto } = props;
  const [description, setDescription] = useState(currentPhoto.description);
  const dispatch = useDispatch();

  const handleClickDescription = () => {
    const currentImage = {
      id: currentPhoto.id,
      description: description,
    };
    if (description && description.length) {
      dispatch(editDescription(currentImage));
    }
    handleClose();
  };

  useEffect(() => {
    setDescription(currentPhoto.description);
  }, [currentPhoto]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          src={currentPhoto.urlsFull}
          style={{ width: "100%" }}
          alt={currentPhoto.description}
        />
        <Typography
          id="modal-modal-description"
          sx={{
            margin: "10px",
          }}
        >
          <span className="spanModal">Id image: </span>
          {currentPhoto.id}
          <br />
          <span className="spanModal">Likes:</span> {currentPhoto.likes}
          <br />
          <span className="spanModal">Width:</span> {currentPhoto.width}
          <br />
          <span className="spanModal">Height:</span> {currentPhoto.height}
          <br />
          <span className="spanModal">Description:</span> {description}
        </Typography>
        <Box sx={{ display: "flex", marginTop: 3 }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Edit Description"
            style={{
              width: 350,
              height: 50,
              borderColor: "#59b3b0",
              borderRadius: 10,
              padding: 5,
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <IconButton
            sx={{ color: "#59b3b0" }}
            onClick={() => handleClickDescription()}
          >
            <PublishedWithChangesIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
}
