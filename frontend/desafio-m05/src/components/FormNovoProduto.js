import React, { useState } from "react";
import TextField from "./Inputs/TextField";
import InputAmount from "./Inputs/InputAmount";
import { useForm } from "react-hook-form";

export default function FormNovoProduto() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [valor, setValor] = useState();
  const { register } = useForm();

  return (
    <div className="FormNovoProduto">
      <h1>Novo produto</h1>
      <form action="">
        <label htmlFor="nome">Nome de usuário</label>
        <TextField
          id="nome"
          type="text"
          value={nome}
          setValue={setNome}
          register={register}
        />
        <label htmlFor="email">Descrição</label>
        <TextField
          type="text"
          id="descricao"
          multiline={true}
          rows={2}
          inputProps={{ maxLength: "50" }}
          value={descricao}
          setValue={setDescricao}
          register={register}
        />
        <span className="avisoQtdCaracteres">Máx.: 50 caracteres</span>
        <label htmlFor="valor">Valor</label>
        <InputAmount
          id="valor"
          value={valor}
          setValue={setValor}
          register={register}
        />
      </form>
    </div>
  );
}
