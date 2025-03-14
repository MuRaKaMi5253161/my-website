"use  client";
import Title from "@/components/item/Title";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Works = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Title title="works" />
      <Box sx={{ width: "80%", paddingTop: "50px", margin: "0 auto" }}>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}
        >
          my products
        </Typography>
        <Grid container spacing={2} sx={{}}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ height: "150px" }}>
                  <Typography variant="h6" component="div">
                    testApp
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is testApp.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Works;
