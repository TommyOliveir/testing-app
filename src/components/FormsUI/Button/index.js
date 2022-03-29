import React from "react";
import { Button } from "@mui/material";
import { useField, useFormikContext } from "formik";



const ButtonWrapper = ({children, ...otherProps}) => {
  const { submitForm, isValid, isSubmitting } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

const configButton = {
    
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit
}

  return <Button disabled={!isValid || isSubmitting} {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
