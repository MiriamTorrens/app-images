import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "white",
          color: "black",
          alignItems: "space-around",
          fontSize: { xs: "small", sm: "large" },
        }}
      >
        <Toolbar>
          <Box>
            <IconButton color="inherit">
              <a
                href="https://www.facebook.com/unsplash/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FacebookIcon
                  sx={{ fontSize: { xs: "large", sm: "xx-large" } }}
                />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a
                href="https://www.instagram.com/accounts/login/?next=/unsplash/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <InstagramIcon
                  sx={{ fontSize: { xs: "large", sm: "xx-large" } }}
                />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a
                href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <TwitterIcon
                  sx={{ fontSize: { xs: "large", sm: "xx-large" } }}
                />
              </a>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <a
              href="https://unsplash.com/es/privacidad"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Privace Policy
            </a>{" "}
            |
            <a
              href="https://unsplash.com/es/t%C3%A9rminos"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Terms
            </a>{" "}
            |
            <a
              href="https://unsplash.com/security?utm_source=unsplash&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Security
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
