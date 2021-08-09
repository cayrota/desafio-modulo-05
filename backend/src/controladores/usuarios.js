const yup = require('yup');
const bcrypt = require('bcrypt');
const knex = require('../conexao');
const schemaCadastroUsuario = require('../validacoes/schemaCadastroUsuario');


const cadastraUsuario = async (req,res) => {
  const {restaurante, ...usuario} = req.body;

  try {
    await schemaCadastroUsuario.validate(req.body);
        
    const verificaEmail = await knex('usuario')
    .where('email',usuario.email);

    if(verificaEmail.length){
      return res.status(400).json('O email informado já foi cadastrado.');
      }

    const {senha: senhaDigitada, ...resto} = usuario;
    const senha = await bcrypt.hash(senhaDigitada, 10);
    const novoUsuario = { ...resto, senha };
    const adicionaUsuario = await knex('usuario').insert(novoUsuario);
        
    if(!adicionaUsuario.rowCount){
      return res.status(400).json('Não foi possível realizar o cadastro do usuario.')
    }
        
    const usuarioID = knex('usuario').select('id').where('email',usuario.email);
    const novoRestaurante = {
      usuario_id : usuarioID,
      nome : restaurante.nome,
      descricao: restaurante.descricao,
      categoria_id: restaurante.idCategoria,
      taxa_entrega: restaurante.taxaEntrega,
      tempo_entrega_minutos: restaurante.tempoEntregaEmMinutos,
      valor_minimo_pedido: restaurante.valorMinimoPedido,
    };

    const adicionaRestaurante = await knex('restaurante').insert(novoRestaurante);

      if(!adicionaRestaurante.rowCount){
        return res.status(400).json('Não foi possível realizar o cadastro do restaurante.')
      }

   return res.status(200).json('Usuário cadastrado com sucesso.');
} catch (error) {
  return res.status(400).json(error.message);
}
}   

module.exports = cadastraUsuario;