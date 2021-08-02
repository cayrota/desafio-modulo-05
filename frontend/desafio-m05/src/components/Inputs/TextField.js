import React, { useEffect, useRef, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useValidacaoForm from "../../hooks/useValidacaoForm";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "47px",
      width: "408px",
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
  helperText: {
    root: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
}));

export default function TextFieldStyle({
  id,
  type,
  multiline,
  rows,
  inputProps,
  value,
  setValue
}) {
  const classes = useStyles();
  const [campoEmBranco, setCampoEmBranco] = useState(false);
  const valueRef = useRef();
  const valueLocalStorageRef = useRef();
  const { abrirMsgDeErro } = useValidacaoForm();

  valueRef.current = value;
  valueLocalStorageRef.current = localStorage.getItem(id);

  useEffect(() => {
    if (valueLocalStorageRef.current) {
      setValue(valueLocalStorageRef.current);
    }

    if ((abrirMsgDeErro && !value) || value === "") {
      setCampoEmBranco(true);
    } else {
      setCampoEmBranco(false);
    }
  }, [value, abrirMsgDeErro]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  if (value !== undefined) {
    localStorage.setItem(id, valueRef.current);
  }

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
        value={value}
        onChange={(e) => handleChange(e)}
        error={multiline ? false : campoEmBranco}
        helperText={multiline ? false : campoEmBranco && "Campo obrigatório"}
        FormHelperTextProps={classes.helperText}
      />
    </form>
  );
}
