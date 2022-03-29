import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const DateTimePicker = ({
  name,
  ...otherProps
}) => {
const [field, meta] = useField(name);

  const configDateTimePicker = {
    type: "date",
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

    //error
    if (meta && meta.touched && meta.error) {
      configDateTimePicker.error = true;
      configDateTimePicker.helperText = meta.error;
  }

  return (
    <div>
      <TextField {...configDateTimePicker}/>
    </div>
  );
};

export default DateTimePicker;
