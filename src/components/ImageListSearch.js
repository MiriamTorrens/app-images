import { results } from "../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
} from "@mui/material";
import result from "../assets/result.png";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToFavourites } from "../slices/collectionSlice";

export default function ImageListSearch() {
  const resultsAPI = useSelector(results);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ width: "95%", margin: "auto" }}>
        <ImageList
          gap={12}
          sx={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))!important",
            overflow: "hidden",
            minHeight: "80vh",
          }}
        >
          {resultsAPI && resultsAPI.length ? (
            resultsAPI.map((item) => (
              <ImageListItem key={item.id} sx={{ height: "100% !important" }}>
                <img
                  src={`${item.urls.thumb}?w=248&fit=crop&auto=format`}
                  alt={item.alt_description}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    fontSize: "small",
                  }}
                  title={item.likes}
                  position="top"
                  actionIcon={
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: "x-large",
                        color: "white",
                        margin: 2,
                        marginRight: 1,
                      }}
                    />
                  }
                  actionPosition="left"
                />
                <ImageListItemBar
                  title={"Author: " + item.user.name}
                  subtitle={item.user.social.instagram_username}
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={() => dispatch(addToFavourites(item))}
                    >
                      <Typography variant="h5">Add</Typography>
                      <AddPhotoAlternateIcon sx={{ fontSize: "xxx-large" }} />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))
          ) : (
            <Box
              sx={{
                display: "block",
                width: "100vw",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              <img src={result} alt="no result"></img>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginTop: 5 }}
              >
                Sorry! No result found{" "}
                <span style={{ color: "var(--main-color)" }}>:(</span>
              </Typography>
            </Box>
          )}
        </ImageList>
      </Box>
    </>
  );
}
