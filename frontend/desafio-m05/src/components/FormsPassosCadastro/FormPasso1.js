import React, { useEffect, useState } from "react";
import TextField from "../Inputs/TextField";
import InputPassword from "../Inputs/InputPassword";
import useValidacaoForm from "../../hooks/useValidacaoForm";


function FormPasso1() {
const [nome, setNome] = useState();
const [email, setEmail] = useState();
const [senha, setSenha] = useState();
const [rptSenha, setRptSenha] = useState();
const { setErro } = useValidacaoForm();

useEffect(() => {
  if (!nome || !email || !senha || !rptSenha) {
    setErro(true);
  } else if (nome === "" || email === "" || senha === "" || rptSenha === "") {
    setErro(true);
  } else {
    setErro(false);
  }
}, [nome, email, senha, rptSenha]);

  return (
    <div className="FormPasso1">
      <label htmlFor="nome">Nome de usuário</label>
      <TextField id="nome" type="text" value={nome} setValue={setNome} />
      <label htmlFor="email">E-mail</label>
      <TextField id="email" type="email" value={email} setValue={setEmail} />
      <label htmlFor="senha">Senha</label>
      <InputPassword id="senha" value={senha} setValue={setSenha} />
      <label htmlFor="rptSenha">Repita a senha</label>
      <InputPassword id="rptSenha" value={rptSenha} setValue={setRptSenha} />
    </div>
  );
}

export default FormPasso1;
