import React, { useEffect, useState } from "react";
import TextField from "../Inputs/TextField";
import InputAmount from "../Inputs/InputAmount";
import useValidacaoForm from "../../hooks/useValidacaoForm";

function FormPasso3() {
  const [taxaEntrega, setTaxaEntrega] = useState();
  const [tempoEntrega, setTempoEntrega] = useState();
  const [valorMinPedido, setValorMinPedido] = useState();
  const { setErro } = useValidacaoForm();
  
  useEffect(() => {
    if (!taxaEntrega || !tempoEntrega || !valorMinPedido) {
      setErro(true);
    } else if (taxaEntrega === "" || tempoEntrega === "" || valorMinPedido === "") {
      setErro(true);
    } else {
      setErro(false);
    }
  }, [taxaEntrega, tempoEntrega, valorMinPedido])

  return (
    <div className="Passo3">
      <label htmlFor="taxaEntrega">Taxa de entrega</label>
      <InputAmount id="taxaEntrega" value={taxaEntrega} setValue={setTaxaEntrega} />
      <label htmlFor="tempoEntrega">Tempo estimado de entrega</label>
      <TextField
        id="tempoEntrega"
        type="text"
        value={tempoEntrega}
        setValue={setTempoEntrega}
      />
      <label htmlFor="valorMinPedido">Valor mínimo do pedido</label>
      <InputAmount id="valorMinPedido" value={valorMinPedido} setValue={setValorMinPedido} />
    </div>
  );
}

export default FormPasso3;
