import React from "react";

function FormPasso3() {
  return (
    <div className="Passo3">
      <form action="" method="post">
        <label htmlFor="taxaDeEntrega">Taxa de entrega</label>
        <input type="number" id="taxaDeEntrega" defaultValue="0" min="0" />
        <label htmlFor="tempoDeEntrega">Tempo estimado de entrega</label>
        <input type="number" id="tempoDeEntrega" defaultValue="30" />
        <label htmlFor="valorMinPedido">Valor mínimo do pedido</label>
        <input type="number" id="valorMinPedido" defaultValue="0" min="0" />
      </form>
    </div>
  );
}

export default FormPasso3;