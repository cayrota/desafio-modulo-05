const knex = require('./conexao');
const jwt = require('jsonwebtoken');

const info = async (req,res) =>
{
    const { autorization } = req.headers;

    try
    {        
        const { id: usuario_id } = jwt.verify(autorization, process.env.HASH_KEY);
        
        const categoria = await knex('categoria');
        const restaurante = await knex('restaurante').where({ usuario_id }).first();
        const { senha, ...usuario } = await knex('usuario').where({id : usuario_id}).first();

        const info = [{ categoria, usuario, restaurante }];

        return res.status(200).json(info);
    }
    catch (error)
    {
        return res.status(400).json(error.message);
    }
}

module.exports = 
{
    info
}