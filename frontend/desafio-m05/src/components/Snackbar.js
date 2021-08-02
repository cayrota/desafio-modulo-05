import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import useRegister from '../hooks/useValidacaoForm';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbars() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { abrirMsgDeErro } = useRegister();

  useEffect(() => {
    if (abrirMsgDeErro) setOpen(true);
  }, [abrirMsgDeErro])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Campo obrigatório vazio!
        </Alert>
      </Snackbar>
    </div>
  );
}