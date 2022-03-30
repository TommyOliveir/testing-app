import React from "react";
import { useContext } from "react";
import {  Box, Typography } from "@mui/material";
import { UserContext } from "../components/UserContext";


function Profile() {
  const msg = useContext(UserContext)
  return (
    <Box marginTop={8}>
      <Typography variant="h4" component="h1">
      Profile {msg}
     
      </Typography>

    </Box>
  );
}

export default Profile;
