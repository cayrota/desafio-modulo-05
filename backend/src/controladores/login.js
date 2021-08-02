const bcrypt = require('bcrypt');
const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const schemaLogin = require('../validacoes/schemaLogin');


const login = async (req,res) => {

    const { email, senha } = req.body;
    try {
      await schemaLogin.validate(req.body);
        
        const verificaUsuario = await knex('usuario')
        .where('email', email).debug();

        if(!verificaUsuario.length){
            return res.status(400).json('Usuário ou senha inválidos');
        }
        
        const usuario = verificaUsuario[0];
        const senhaVerificada = await bcrypt.compare(senha, usuario.senha);

        if (!senhaVerificada) {
            return res.status(400).json('Usuário ou senha inválidos!');
          }

        const token = jwt.sign({id: usuario.id}, process.env.HASH_KEY);

        return res.status(200).json({
            token: token});

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = login;