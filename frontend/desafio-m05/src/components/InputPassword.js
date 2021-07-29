import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

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
      "&.MuiOutlinedInput-adornedEnd": {
        paddingRight: "24px"
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
      padding: "10px 24px",
      fontFamily: "'Montserrat', sans-serif",
    },
  },
}));

export default function InputPassword({ id }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id={id}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}
