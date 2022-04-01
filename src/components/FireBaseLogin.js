import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

//styles
const useStyles = makeStyles({
  formContainer: {
    background: "",
    border: 0,
    borderRadius: 3,
    boxShadow: "2px 3px 13px 1px rgba(0,0,0,0.49)",
    color: "#0080da",

    width: "70%",
    padding: "20px 30px 30px 30px",
    marginTop: "80px",
    marginBottom: "20px",
    margin: "auto",
  },
});

//item

//JSX
const FireBaseLogin = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Box className={classes.formContainer}>
          <Typography
            padding={1}
            color="primary"
            variant="h6"
            textAlign="center"
          >
            Login
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography> Your details</Typography>
            </Grid>

            <Grid item xs={12}>
            <TextField  label="Email" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
            <TextField  label="Password" variant="outlined" fullWidth type="password"/>
            </Grid>


            <Grid item xs={12}>
            <Button type="submit "variant="contained" fullWidth>Submit</Button>
            </Grid>
          </Grid>
          <Typography>Don't have an Account? <Link to="signup" style={{ color: '#0080da', textDecoration: "none" }}>Sign up here</Link></Typography>
        </Box>
      </Container>
    </div>
  );
};

export default FireBaseLogin;
