import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { typography } from "@mui/system";
import { red, green, blue } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
    color: "white",
    fontSize: 19,
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
    fontSize: 16,
  },
}));

export default function MuiBreakPoints() {
  return (
    <>
      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
      <h1>THANK YOU</h1>
    </>
  );
}
