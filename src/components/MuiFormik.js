import React from "react";
import { Button, Box, TextField, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string, number, date, InferType } from "yup";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  name: "",
  password: "",
};

const MuiFormik = () => {
  const navigate = useNavigate();
  return (
    <Box width="500px" mx="auto" mt={4}>
      <Paper sx={{ padding: 4 }}>
        <div>
          <Typography mb={1} variant="h5" component="h1" color="primary">
            Sign Up
          </Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {
              console.log(values);

              formikHelpers.resetForm();
            }}
            validationSchema={object({
              email: string()
                .required("Please enter email")
                .email("Invalid email"),
              name: string().required("Please enter name"),
              password: string()
                .required("Please enter password")
                .min(6, "password min 6 characters"),
            })}
          >
            {({ errors, isValid, touched, dirty }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Email"
                  fullWidth
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
                <Box height={14} />
                <Field
                  name="name"
                  type="name"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Name"
                  fullWidth
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                />
                <Box height={14} />
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Password"
                  fullWidth
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                />
                <Box height={14} />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  disabled={!dirty || !isValid}
                  onClick={() => navigate('form')}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Paper>
      <Typography mt={4} variant="body2">
        Material UI with Formik by Tommy Oliveir
      </Typography>
    </Box>
  );
};

export default MuiFormik;
