import React from "react";
import { TextField, Menu, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: "outlined",
    onChange: handleChange,
  };

  //error
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
}


  return <TextField {...configSelect}>
    {
      Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
          {options[item]}
          </MenuItem>
        )
      })
    }
  </TextField>;
};

export default SelectWrapper;
