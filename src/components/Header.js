import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "right",
          boxShadow: "inset 3px -15px 12px -4px rgba(168,168,168,0.65);",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Toolbar>
            <Logo />
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "#b1adad",
                fontSize: { xs: "small", sm: "medium" },
              }}
            >
              <NavLink
                activestyle={{ color: "black" }}
                style={({ isActive }) => ({
                  margin: 10,
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "var(--main-color)" : "#b1adad",
                })}
                to="/"
              >
                HOME
              </NavLink>
              |
              <NavLink
                activestyle={{ color: "black" }}
                style={({ isActive }) => ({
                  margin: 10,
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "var(--main-color)" : "#b1adad",
                })}
                to="/dashboard"
              >
                SEARCH
              </NavLink>
              |
              <NavLink
                activestyle={{ color: "black" }}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  margin: 10,
                  color: isActive ? "var(--main-color)" : "#b1adad",
                })}
                to="/MyPhotos"
              >
                COLLECTION
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
