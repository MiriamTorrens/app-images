import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";

export default function ButtonSearch() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        variant="extended"
        className="hover"
        sx={{ backgroundColor: "var(--main-color)", color: "white" }}
      >
        <ImageSearchIcon sx={{ mr: 1 }} />
        Search
      </Fab>
    </Box>
  );
}
