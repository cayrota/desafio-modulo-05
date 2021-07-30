import React from "react";
import TextField from "./TextField";
import InputAmount from "./InputAmount";

function FormPasso3() {
  return (
    <div className="Passo3">
      <form action="" method="post">
        <label htmlFor="taxaDeEntrega">Taxa de entrega</label>
        <TextField
          id="taxaDeEntrega"
          type="number"
          defaultValue="0"
          inputProps={{ min: "0" }}
        />
        <label htmlFor="tempoDeEntrega">Tempo estimado de entrega</label>
        <TextField
          id="tempoDeEntrega"
          type="number"
          defaultValue="30"
          inputProps={{ min: "0" }}
        />
        <label htmlFor="valorMinPedido">Valor mínimo do pedido</label>
        <InputAmount id="valorMinPedido" />
      </form>
    </div>
  );
}

export default FormPasso3;
