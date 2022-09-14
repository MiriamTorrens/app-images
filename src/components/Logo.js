import { NavLink } from "react-router-dom";
import CameraIcon from "@mui/icons-material/Camera";
import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <NavLink
      to="/"
      style={{
        display: "flex",
        color: "black",
      }}
    >
      <CameraIcon sx={{ fontSize: "xx-large" }} />
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          marginLeft: 1,
          fontSize: "x-large",
          fontFamily: "'Ms Madi', cursive;",
        }}
      >
        MT
      </Typography>
    </NavLink>
  );
}
