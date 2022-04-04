import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";


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

//JSX
const FireBaseSignup = () => {
  const classes = useStyles();
  //refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    //  alert("ehehe")
    e.preventDefault();

  }
  return (
    <div>
      <Container>
       
        <form onSubmit={handleSubmit}>
          <Box className={classes.formContainer}>
            <Typography
              padding={1}
              color="primary"
              variant="h6"
              textAlign="center"
            >
              Signup
               {error && <h2>{error}</h2>}
            
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography> Your details</Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  id="email"
                  variant="outlined"
                  fullWidth
                  inputRef={emailRef}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password-confirm"
                  label="Password Confirmation"
                  variant="outlined"
                  fullWidth
                  type="password"
                  inputRef={passwordConfirmRef}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  disabled={loading}
                  type="submit "
                  variant="contained"
                  fullWidth
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
            <Typography>
              Already have an Account?{" "}
              <Link
                to="/login"
                style={{ color: "#0080da", textDecoration: "none" }}
              >
                Log In
              </Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default FireBaseSignup;
