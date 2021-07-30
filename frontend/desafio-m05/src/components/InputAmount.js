import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
        height: '47px',
      }
    },
  },
  margin: {
    marginBottom: "49px",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '408px',
    "& input": {
      padding: "10px 24px 10px 0",
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  fontFamily: {
    fontFamily: "'Montserrat', sans-serif",
  }
}));

export default function InputAmount({ id }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
        <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id={id}
            value={values.amount}
            onChange={handleChange('amount')}
            placeholder="00,00"
            startAdornment={<InputAdornment position="start" className={classes.fontFamily} disableTypography >R$</InputAdornment>}
          />
        </FormControl>
    </div>
  );
}
