import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import useValidacaoForm from "../../hooks/useValidacaoForm";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
      "&.MuiOutlinedInput-adornedStart": {
        paddingLeft: "24px",
        height: "47px",
      },
    },
  },
  margin: {
    marginBottom: "49px",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "408px",
    "& input": {
      padding: "10px 24px 10px 0",
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  fontFamily: {
    fontFamily: "'Montserrat', sans-serif",
  },
  helperText: {
    margin: "3px 14px 0",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

export default function InputAmount({ id, value, setValue, register }) {
  const classes = useStyles();
  const [campoEmBranco, setCampoEmBranco] = useState(false);
  const { abrirMensagem } = useValidacaoForm();
  const valueRef = useRef();
  const valueLocalStorageRef = useRef();

  valueRef.current = value;
  valueLocalStorageRef.current = localStorage.getItem(id);

  useEffect(() => {
    if (valueLocalStorageRef.current) {
      setValue(valueLocalStorageRef.current);
    }

    if ((abrirMensagem && !value) || value === "") {
      setCampoEmBranco(true);
    } else if (value) {
      setCampoEmBranco(false);
    }
  }, [value, abrirMensagem]);

  const handleChange = (e) => {
    let v = e.target.value;
    if (v.length === 1) {
      v = `0,0${v}`;
    } else if (v) {
      let a = v.split(",").join("").split("");
      const dc = a[a.length - 2] ?? 0;
      const uc = a[a.length - 1] ?? 0;
      a.pop();
      a.pop();
      if (a.length >= 2 && a[0] === "0") {
        a.shift();
      }
      if (a.length === 0) {
        a = ["0"];
      }
      v = `${a.join("") ?? 0},${dc}${uc}`;
    }
    setValue(v);
  };

  if (value !== undefined) {
    localStorage.setItem(id, valueRef.current);
  }

  return (
    <div className={clsx(classes.margin, classes.root)}>
      <OutlinedInput
        {...register(`${id}`, { value: value })}
        id={id}
        error={campoEmBranco}
        value={value}
        onChange={(e) => handleChange(e)}
        className={classes.textField}
        placeholder="00,00"
        startAdornment={
          <InputAdornment
            position="start"
            className={classes.fontFamily}
            disableTypography
          >
            R$
          </InputAdornment>
        }
      />
      {campoEmBranco && (
        <FormHelperText className={classes.helperText} error={campoEmBranco}>
          Campo obrigatório
        </FormHelperText>
      )}
    </div>
  );
}
