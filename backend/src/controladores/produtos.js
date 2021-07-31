const knex = require('../conexao');

async function listarProdutos(req, res) {
  try {
    const produtos = await knex('produto');
    res.status(200).json(produtos);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function consultarProdutoId(req, res) {
  const { id } = req.params;
  const { id: usuario_id } = req.usuario;

  try {
    const { id: restaurante_id } = await knex('restaurante')
      .where({ usuario_id })
      .first();

    const produtos = await knex('produto').where({ id, restaurante_id });

    if (produtos.length === 0) {
      return res.status(404).json('Não existe produto com id informado.');
    }

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

async function cadastrarProduto(req, res) {
  const {
    nome,
    descricao,
    preco,
    permiteObservacoes: permite_observacoes,
  } = req.body;
  const restaurante_id = req.usuario.id;

  if (!nome || !preco) {
    return res.status(404).json('Nome e preço são obrigatórios');
  }

  try {
    const produto = await knex('produto').insert({
      restaurante_id,
      nome,
      descricao,
      preco,
      permite_observacoes,
    });

    if (produto.rowCount === 0) {
      return res.status(400).json('Não foi possivel cadastrar o produto');
    }

    res.status(200).json('Produto inserido com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function alterarProduto(req, res) {
  const {
    nome,
    descricao,
    preco,
    permiteObservacoes: permite_observacoes,
  } = req.body;
  const restaurante_id = req.usuario.id;
  const { id } = req.params;

  if (!nome && !descricao && !preco && !permite_observacoes) {
    return res.status(400).json('Deve-se preencher pelo menos um dos campos.');
  }

  try {
    const produto = await knex('produto').where({ id, restaurante_id });

    if (produto.length === 0) {
      return res.status(404).json('O produto não foi encontrado!');
    }

    const queryParaAtualizar = await knex('produto')
      .where({ id })
      .update({ nome, descricao, preco, permite_observacoes });

    if (queryParaAtualizar.length === 0) {
      return res.status(400).json('Erro na atualização.');
    }

    res.status(200).json('Alteração feita com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function removerProduto(req, res) {
  const { id } = req.params;
  const restaurante_id = req.usuario.id;

  try {
    const produto = await knex('produto').where({ id, restaurante_id });

    if (produto.length === 0) {
      return res.status(404).json('O produto não foi encontrado.');
    }

    const queryParaRemover = await knex('produto').where({ id }).del();

    if (queryParaRemover.length === 0) {
      return res.status(400).json('Não foi possivel remover o produto');
    }

    res.status(200).json('Removido com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function ativarProduto(req, res) {
  const { id } = req.params;
  const restaurante_id = req.usuario.id;

  try {
    const produto = await knex('produto').where({ id, restaurante_id });

    if (produto.length === 0) {
      return res.status(404).json('O produto não foi encontrado.');
    }

    const ativar = await knex('produto')
      .where({ id })
      .update({ ativo: true });

    if (ativar.length === 0) {
      return res.status(400).json('Erro ao ativar o produto.');
    }

    res.status(200).json('Produto ativado com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function desativarProduto(req, res) {
  const { id } = req.params;
  const restaurante_id = req.usuario.id;

  try {
    const produto = await knex('produto').where({ id, restaurante_id });

    if (produto.length === 0) {
      return res.status(404).json('O produto não foi encontrado.');
    }

    const desativar = await knex('produto')
      .where({ id })
      .update({ ativo: false });

    if (desativar.length === 0) {
      return res.status(400).json('Erro ao ativar o produto.');
    }

    res.status(200).json('Produto desativado com sucesso!');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  listarProdutos,
  consultarProdutoId,
  cadastrarProduto,
  alterarProduto,
  removerProduto,
  ativarProduto,
  desativarProduto,
};