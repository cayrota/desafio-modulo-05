import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "hsla(0, 100%, 100%, 1)",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 24px",
    fontFamily: ["'Montserrat', 'sans-serif'"].join(","),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "hsla(0, 100%, 100%, 1)",
      border: "1px solid hsla(0, 0%, 75%, 1)",
    },
    "&:hover": {
      borderRadius: 4,
      border: "1px solid hsla(0, 100%, 0%, 1)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: "49px",
    width: "408px",
  },
  root: {
    fontFamily: "'Montserrat', 'sans-serif'",
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

export default function Selects({ opcoes }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          id="demo-customized-select"
          value={value}
          onChange={handleChange}
          input={<BootstrapInput />}
          IconComponent={ExpandMoreIcon}
          MenuProps={MenuProps}
        >
          {opcoes.map((opcao) => {
            return (
              <MenuItem value={opcao} className={classes.root}>
                {opcao}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
