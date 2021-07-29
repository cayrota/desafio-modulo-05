import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "hsla(0, 0%, 75%, 1)",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid hsla(0, 0%, 75%, 1)",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '408px',
    display: "flex",
    flexWrap: "wrap",
    "& input": {
      padding: "10px 24px",
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  margin: {
    marginBottom: '49px',
  },
}));

export default function TextFields({ id, type }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        id={id}
        type={type}
        className={classes.margin}
        variant="outlined"
      />
    </form>
  );
}
