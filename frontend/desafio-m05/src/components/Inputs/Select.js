import React, { useEffect, useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormHelperText from "@material-ui/core/FormHelperText";
import clsx from "clsx";
import useValidacaoForm from "../../hooks/useValidacaoForm";

const BootstrapInput = withStyles((theme) => ({
  input: {
    display: "flex",
    alignItems: "center",
    height: "24.778px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "hsla(0, 100%, 100%, 1)",
    border: "1px solid hsla(0, 0%, 75%, 1)",
    fontSize: 16,
    padding: "10px 24px",
    fontFamily: ["'Montserrat', 'sans-serif'"].join(","),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "hsla(0, 100%, 100%, 1)",
      borderColor: "hsla(0, 0%, 75%, 1)",
    },
    "&:hover": {
      borderRadius: 4,
      border: "1px solid hsla(0, 100%, 0%, 1)",
    },
    error: {
      borderColor: "1px solid hsla(4, 90%, 58%, 1)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: "49px",
  },
  root: {
    fontFamily: "'Montserrat', 'sans-serif'",
  },
  width: {
    width: "408px",
  },
  helperText: {
    margin: "3px 14px 0",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      width: "408px",
      boxShadow: "none",
      border: "1px solid hsla(0, 0%, 75%, 1)",
    },
  },
};

export default function Selects({ id, opcoes, value, setValue }) {
  const classes = useStyles();
  const [campoEmBranco, setCampoEmBranco] = useState(false);
  const { abrirMsgDeErro } = useValidacaoForm();
  const valueRef = useRef();
  const valueLocalStorageRef = useRef();

  valueRef.current = value;
  valueLocalStorageRef.current = localStorage.getItem(id);

  useEffect(() => {
    if (valueLocalStorageRef.current) {
      setValue(valueLocalStorageRef.current);
    }

    if (abrirMsgDeErro && (value === "" || value === "0")) {
      setCampoEmBranco(true);
    } else {
      setCampoEmBranco(false);
    }
  }, [value, abrirMsgDeErro]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (value !== "") {
    localStorage.setItem(id, valueRef.current);
  }

  return (
    <div className={clsx(classes.margin)}>
      <Select
        id={id}
        value={value}
        placeholder="Escolha uma categoria"
        className={classes.width}
        onChange={handleChange}
        input={<BootstrapInput />}
        SelectDisplayProps={
          campoEmBranco && {
            style: { border: "1px solid hsla(4, 90%, 58%, 1)" },
          }
        }
        IconComponent={ExpandMoreIcon}
        MenuProps={MenuProps}
      >
        {opcoes.map((opcao, index) => {
          return (
            <MenuItem value={index} className={classes.root}>
              {opcao}
            </MenuItem>
          );
        })}
      </Select>
      {campoEmBranco && (
        <FormHelperText className={classes.helperText} error={campoEmBranco}>
          Campo obrigatório
        </FormHelperText>
      )}
    </div>
  );
}
