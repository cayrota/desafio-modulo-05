import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Ilustração from "../../assets/illustration.svg";
import Steppers from "../../components/Steppers";
import FormPasso1 from "../../components/FormsPassosCadastro/FormPasso1";
import FormPasso2 from "../../components/FormsPassosCadastro/FormPasso2";
import FormPasso3 from "../../components/FormsPassosCadastro/FormPasso3";
import RegisterProvider from "../../contexts/RegisterProvider";
import Snackbar from "../../components/Snackbar";

const passo1 = <FormPasso1 />;
const passo2 = <FormPasso2 />;
const passo3 = <FormPasso3 />;

const formsPassos = [passo1, passo2, passo3];

function Cadastro() {
  return (
    <div className="Cadastro">
      <img src={Ilustração} alt="Ilustração" className="desenhoBg" />
      <div className="formCadastro">
        <RegisterProvider>
          <form action="" method="post">
            <Steppers titulo="Cadastro" formsPassos={formsPassos} />
          </form>
          <Snackbar />
        </RegisterProvider>
        <span className="spanRedirLogin">
          Já tem uma conta?{" "}
          <Link to="/" className="linkLogin">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Cadastro;
