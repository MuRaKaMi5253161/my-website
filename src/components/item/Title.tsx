import { Box, Typography, Divider } from "@mui/material";
import React from "react";

export interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <Box sx={{ width: "100%", height: "60px" }}>
      <Typography
        sx={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        {props.title}
      </Typography>
      <Divider sx={{ width: "60%", margin: "0 auto", marginTop: "20px" }} />
    </Box>
  );
};

export default Title;
