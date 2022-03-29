import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Textfield from "./FormsUI/Textfield";
import Select from "./FormsUI/Select";
import countries from "../data/countries.json";
import DateTimePicker from "./FormsUI/DateTimePicker";
import Checkbox from "./FormsUI/Checkbox";
import Button from "./FormsUI/Button";
//styles
const useStyles = makeStyles({
  formContainer: {
    background: "",
    border: 0,
    borderRadius: 3,
    // boxShadow: "2px 3px 13px 1px rgba(0,0,0,0.49)",
    color: "#0080da",

    width: "70%",
    padding: "0 30px",
    marginTop: "80px",
    marginBottom: "20px",
    margin: "auto",
  },
});

//item

//FormikState
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

//FromikSchema
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please type valid number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string().required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted")
    .required("The terms and conditions must be accepted"),
});

//JSX
export const RegisterFormik = () => {
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
            Register Form
          </Typography>

          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, onSubmitProps) => {
              console.log('values', values);
              onSubmitProps.resetForm();
              onSubmitProps.setSubmitting(false)
            }}
          >
            {(formik) => {
              console.log("formik props", formik)
              
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography> Your details</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="firstName" label="First Name" />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield name="lastName" label="Last Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield name="email" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield name="phone" label="Phone" />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography> Address</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield
                        name="addressLine1"
                        label="
                  Address Line 1"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield
                        name="addressLine2"
                        label="
                  Address Line 2"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        name="city"
                        label="
                  City"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="state"
                        label="
                  State"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Select
                        name="country"
                        label="Country"
                        options={countries}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography> Booking info</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePicker name="arrivalDate" label="Arrival Date" />
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePicker
                        name="departureDate"
                        label="Departure Date"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield
                        name="message"
                        label="Message"
                        multiline={true}
                        rows={5}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Checkbox
                        name="termsOfService"
                        legend="Terms of Service"
                        label="I agree"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button >Submit Form</Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};
