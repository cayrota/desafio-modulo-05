import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: '47px',
      "& fieldset": {
        borderColor: "hsla(0, 0%, 75%, 1)",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid hsla(0, 0%, 75%, 1)",
      },
      "&.MuiOutlinedInput-multiline": {
        padding: "10px 24px",
        fontFamily: "'Montserrat', sans-serif",
        height: "74px",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "408px",
    display: "flex",
    flexWrap: "wrap",
    "& input": {
      padding: "10px 24px",
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  margin: {
    marginBottom: "49px",
  },
}));

export default function TextFieldStyle({
  id,
  type,
  multiline,
  rows,
  inputProps,
  defaultValue
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        id={id}
        type={type}
        className={classes.margin}
        variant="outlined"
        multiline={multiline}
        rows={multiline ? rows : 1}
        inputProps={inputProps}
        defaultValue={defaultValue}
      />
    </form>
  );
}
