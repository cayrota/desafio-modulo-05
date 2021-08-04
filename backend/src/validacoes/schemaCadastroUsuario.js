const yup = require('./configuracoes');

const schemaCadastroUsuario = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required(),
      restaurante: yup.object().shape({
      nome: yup.string().required().required(),
      descricao: yup.string().required(),
      idCategoria: yup.number().required(),
      taxaEntrega: yup.number().required().strict(),
      tempoEntregaEmMinutos: yup.number().required().strict(),
      valorMinimoPedido: yup.number().required().strict()
    })
});

module.exports = schemaCadastroUsuario;