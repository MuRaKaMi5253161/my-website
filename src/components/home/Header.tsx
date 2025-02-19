import { Box, Link } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        margin: "0 auto",
        justifyContent: "space-between",
        height: "60px",
        paddingTop: "15px",
      }}
    >
      <Link
        href="/about"
        underline="hover"
        color="white"
        sx={{ fontSize: "18px" }}
      >
        Home
      </Link>
      <Link
        href="/about"
        underline="hover"
        color="white"
        sx={{ fontSize: "18px" }}
      >
        about
      </Link>
      <Link
        href="/works"
        underline="hover"
        color="white"
        sx={{ fontSize: "18px" }}
      >
        works
      </Link>
      <Link
        href="/contact"
        underline="hover"
        color="white"
        sx={{ fontSize: "18px" }}
      >
        contact
      </Link>
    </Box>
  );
};

export default Header;
