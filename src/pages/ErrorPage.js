import React from "react";
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box marginTop={8}  sx={{  mx: "auto", width: 400}}>
      <Typography variant="h2" component="h1" >
        404
      </Typography>
      <Typography variant="h4" component="h2">
        Page not found
      </Typography>
    </Box>
  );
};

export default ErrorPage;
