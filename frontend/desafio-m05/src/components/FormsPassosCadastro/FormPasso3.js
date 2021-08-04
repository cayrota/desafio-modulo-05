import React, { useEffect, useState } from "react";
import TextField from "../Inputs/TextField";
import InputAmount from "../Inputs/InputAmount";
import useValidacaoForm from "../../hooks/useValidacaoForm";

function FormPasso3({ register }) {
  const [taxaEntrega, setTaxaEntrega] = useState();
  const [tempoEntrega, setTempoEntrega] = useState();
  const [valorMinPedido, setValorMinPedido] = useState();
  const { setErro, setMensagem } = useValidacaoForm();

  useEffect(() => {
    if (!taxaEntrega || !tempoEntrega || !valorMinPedido) {
      setMensagem({
        texto: "Campo obrigatório vazio!",
        severidade: "error"
      });
      setErro(true);
    } else if (
      taxaEntrega === "" ||
      tempoEntrega === "" ||
      valorMinPedido === ""
    ) {
      setMensagem({
        texto: "Campo obrigatório vazio!",
        severidade: "error"
      });
      setErro(true);
    } else {
      setMensagem({
        texto: "Cadastro realizado com sucesso!",
        severidade: "success"
      });
      setErro(false);
    }
  }, [taxaEntrega, tempoEntrega, valorMinPedido]);

  return (
    <div className="Passo3">
      <label htmlFor="taxaEntrega">Taxa de entrega</label>
      <InputAmount
        id="taxaEntrega"
        value={taxaEntrega}
        setValue={setTaxaEntrega}
        register={register}
      />
      <label htmlFor="tempoEntrega">Tempo estimado de entrega</label>
      <TextField
        id="tempoEntrega"
        type="text"
        value={tempoEntrega}
        setValue={setTempoEntrega}
        register={register}
      />
      <label htmlFor="valorMinPedido">Valor mínimo do pedido</label>
      <InputAmount
        id="valorMinPedido"
        value={valorMinPedido}
        setValue={setValorMinPedido}
        register={register}
      />
    </div>
  );
}

export default FormPasso3;
