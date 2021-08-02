import { useState } from "react";
import { useForm } from "react-hook-form";

function useValidacaoFormProvider() {
  const { register, handleSubmit } = useForm();
  const [erro, setErro] = useState(false);
  const [abrirMsgDeErro, setAbrirMsgDeErro] = useState(false);

  return {
    register,
    handleSubmit,
    erro,
    setErro,
    abrirMsgDeErro,
    setAbrirMsgDeErro,
  };
}

export default useValidacaoFormProvider;
