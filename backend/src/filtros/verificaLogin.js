const jwt = require('jsonwebtoken');
const knex = require('../conexao');

const verificaLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(404).json('Token não informado');
  }
  try {
    const token = authorization.replace('Bearer', '').trim();
    const { id } = jwt.verify(token, process.env.HASH_KEY);
    const validaID = await knex('usuario').where('id', id);

    if (!validaID.length) {
      return res.status.json('Usuário não encontrado!');
    }

    const { senha, ...dadosUsuario } = validaID[0];

    req.usuario = dadosUsuario;
    console.log(dadosUsuario);

    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = verificaLogin;