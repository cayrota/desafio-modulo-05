const jwt = require('jsonwebtoken');
const knex = require('../bancodedados/conexao');

const filtroLogin = async (req, res, next) =>
{
    const { autorization } = req.headers;

    if(!autorization)
        return res.status(401).json('Token não informado');

    try 
    {
        const token = autorization.replace('Bearer', '').trim();
        const { id } = jwt.verify(token, process.env.SENHA_JWT);
        const usuarioExiste = await knex('usuario').where({id}).first();

        if(!usuarioExiste)
            return res.status(404).json('Usuario não encontrado');
        
        const { senha, ...dadosUsuario } = usuarioExiste;
        req.usuario = dadosUsuario;
        
        next();
    }
    catch (error) 
    {
        return res.status(400).json(error.message);
    }
}

module.exports = filtroLogin