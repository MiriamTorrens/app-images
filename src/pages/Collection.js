import { favourites } from "../slices/collectionSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import InputSearch from "../components/InputSearch";
import SelectInput from "../components/SelectInput";
import ImageListCollection from "../components/ImageListCollection";
import ModalCollection from "../components/ModalCollection";

export default function MyPhotos(props) {
  const { query, setQuery } = props;
  const [order, setOrder] = useState("");
  const favoritePhotos = useSelector(favourites);
  const [myPhotos, setMyPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPhoto, setCurrentPhoto] = useState({});

  useEffect(() => {
    setMyPhotos(favoritePhotos);
    setQuery("");
  }, [favoritePhotos]);

  useEffect(() => {
    const filteredOrderPhotos = favoritePhotos.filter((photo) =>
      photo.description.toLowerCase().includes(query.toLowerCase())
    );
    filteredOrderPhotos.sort((a, b) => a[order] - b[order]);
    setMyPhotos(filteredOrderPhotos);
  }, [favoritePhotos, order, query]);

  const handleChangeDescription = (photo) => {
    handleOpen();
    setCurrentPhoto(photo);
  };

  return (
    <Box sx={{ minHeight: window.innerHeight }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <InputSearch query={query} setQuery={setQuery} />
        <SelectInput order={order} setOrder={setOrder} />
      </Box>
      <ImageListCollection
        myPhotos={myPhotos}
        handleChangeDescription={handleChangeDescription}
      />
      <ModalCollection
        open={open}
        handleClose={handleClose}
        currentPhoto={currentPhoto}
      />
    </Box>
  );
}
