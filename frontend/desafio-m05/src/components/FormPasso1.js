import React from "react";
import TextField from "./TextField";
import InputPassword from "./InputPassword";


function FormPasso1() {
  return (
    <div className="FormPasso1">
      <form action="" method="post">
        <label htmlFor="nome">Nome de usuário</label>
        <TextField id="nome" type="text" multiline={false} />
        <label htmlFor="email">E-mail</label>
        <TextField id="email" type="email" multiline={false} />
        <label htmlFor="senha">Senha</label>
        <InputPassword id="senha"/>
        <label htmlFor="rptSenha">Repita a senha</label>
        <InputPassword id="rptSenha"/>
      </form>
    </div>
  );
}

export default FormPasso1;