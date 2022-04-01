import React from "react";
import { Box, Typography } from "@mui/material";
import FireBaseLogin from "../components/FireBaseLogin";
// import ImageSlide from "../components/ImageSlide"


export const Home = () => {
  return (
    <Box marginTop={8}>
      <Typography variant="h4" component="h1">
        Home Page
      </Typography>
      {/* <ImageSlide/> */}
      <FireBaseLogin />

    </Box>
  );
};
