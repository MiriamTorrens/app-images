import { removeFromFavourites } from "../slices/collectionSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import ButtonSearch from "./ButtonSearch";
import { NavLink } from "react-router-dom";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
} from "@mui/material";
import empty from "../assets/empty.png";
import { useDispatch } from "react-redux";
const FileSaver = require("file-saver");

export default function ImageListCollection(props) {
  const { myPhotos, handleChangeDescription } = props;
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "95%", margin: "auto" }}>
      <ImageList
        gap={12}
        sx={{
          marginBottom: 10,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}
      >
        {myPhotos && myPhotos.length ? (
          myPhotos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.urlsThumb}?w=248&fit=crop&auto=format`}
                alt={item.description}
              />
              <ImageListItemBar
                actionIcon={
                  <>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => handleChangeDescription(item)}
                    >
                      <EditIcon sx={{ fontSize: "xx-large" }} />
                    </IconButton>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() =>
                        FileSaver.saveAs(item.urlsFull, item.description)
                      }
                    >
                      <DownloadIcon sx={{ fontSize: "xx-large" }} />
                    </IconButton>
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => dispatch(removeFromFavourites(item))}
                    >
                      <DeleteOutlineIcon sx={{ fontSize: "xx-large" }} />
                    </IconButton>
                  </>
                }
              />
            </ImageListItem>
          ))
        ) : (
          <Box
            sx={{
              display: "block",
              width: "92vw",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            <img src={empty} alt="no photos"></img>
            <Typography variant="h5" sx={{ fontWeight: "bold", margin: 5 }}>
              Oops… It looks like you don’t have any photos saved yet{" "}
              <span style={{ color: "var(--main-color)" }}>:(</span>
            </Typography>
            <NavLink to="/dashboard">
              <ButtonSearch />
            </NavLink>
          </Box>
        )}
      </ImageList>
    </Box>
  );
}
