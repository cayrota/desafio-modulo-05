import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Ilustração from "../../assets/illustration.svg";
import Steppers from "../../components/Steppers";
import FormPasso1 from "../../components/FormsPassosCadastro/FormPasso1";
import FormPasso2 from "../../components/FormsPassosCadastro/FormPasso2";
import FormPasso3 from "../../components/FormsPassosCadastro/FormPasso3";
import ValidacaoFormProvider from "../../contexts/ValidacaoFormProvider";
import Snackbar from "../../components/Snackbar";
import { useForm } from "react-hook-form";


function Cadastro() {
  const { handleSubmit, register } = useForm();

  const passo1 = <FormPasso1 register={register} />;
  const passo2 = <FormPasso2 register={register} />;
  const passo3 = <FormPasso3 register={register} />;
  
  const formsPassos = [passo1, passo2, passo3];


  const onSubmit = (data) => { 
    console.log(data);
  }

  return (
    <div className="Cadastro">
      <img src={Ilustração} alt="Ilustração" className="desenhoBg" />
      <div className="formCadastro">
        <ValidacaoFormProvider>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Steppers titulo="Cadastro" formsPassos={formsPassos} register={register} />
          </form>
          <Snackbar />
        </ValidacaoFormProvider>
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
