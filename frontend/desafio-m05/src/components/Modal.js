import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import clsx from "clsx";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "1000px",
    backgroundColor: "hsla(0, 0%, 100%, 1)",
    padding: "64px",
    borderRadius: "16px",
    boxShadow: "0px 4px 16px rgba(50, 50, 50, 0.4)",
  },
  contained: {
    marginRight: theme.spacing(1),
    borderRadius: "20px",
    textTransform: "none",
    boxShadow: "none",
    height: "40px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "600",
    fontSize: "14px",
    color: "hsla(0, 0%, 100%, 1)",
    backgroundColor: "hsla(14, 99%, 41%, 1)",
    paddingLeft: "40px",
    paddingRight: "40px",
    "&:hover": {
      backgroundColor: "hsla(14, 84%, 36%, 1)",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "hsla(218, 8%, 80%, 1)",
      color: "hsla(210, 3%, 45%, 1)",
    },
  },
}));

export default function SimpleModal({ labelBotao, conteudo }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle());
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {conteudo}
    </div>
  );

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        onClick={handleOpen}
        className={clsx(classes.button, classes.contained)}
      >
        {labelBotao}
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
