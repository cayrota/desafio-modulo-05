import React from "react";
import TextField from "./TextField";
import Select from "./Select";

const opcoes = [
  "Diversos",
  "Lanches",
  "Carnes",
  "Massas",
  "Pizzas",
  "Japonesa",
  "Chinesa",
  "Mexicano",
  "Brasileira",
  "Italiana",
  "Árabe",
];

function FormPasso2() {
  return (
    <div className="FormPasso2">
      <form action="" method="post">
        <label htmlFor="nomeRestaurante">Nome do restaurante</label>
        <TextField id="nomeRestaurante" type="text" multiline={false} />
        <label htmlFor="categoria">Categoria do restaurante</label>
        <Select opcoes={opcoes} />
        <label htmlFor="descricao">Descrição</label>
        <TextField
          type="text"
          id="descricao"
          multiline={true}
          rows={2}
          inputProps={{ maxLength: "50" }}
        />
        <span className="avisoQtdCaracteres">Máx.: 50 caracteres</span>
      </form>
    </div>
  );
}

export default FormPasso2;
