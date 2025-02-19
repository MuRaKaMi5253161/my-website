import { Box } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        margin: "0 auto",
        justifyContent: "space-between",
      }}
    >
      <XIcon sx={{ fontSize: "40px" }} />
      <FacebookIcon sx={{ fontSize: "40px" }} />
      <GitHubIcon sx={{ fontSize: "40px" }} />
      <MailOutlineIcon sx={{ fontSize: "40px" }} />
    </Box>
  );
};

export default Footer;
