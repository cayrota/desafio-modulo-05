const express = require('express');
const login = require('./controladores/login');
const cadastro = require('./controladores/usuarios');
const verificaLogin = require('./filtros/verificaLogin');
const produtos = require('./controladores/produtos');


const rotas = express();

//rotas de usuarios
rotas.post('/cadastro', cadastro);
rotas.post('/login', login);

// rotas produtos
rotas.get('/produtos',verificaLogin, produtos.listarProdutos);
rotas.get('/produtos/:id',verificaLogin, produtos.consultarProdutoId);
rotas.post('/produtos',verificaLogin, produtos.cadastrarProduto);
rotas.put('/produtos/:id',verificaLogin, produtos.alterarProduto);
rotas.delete('/produtos/:id',verificaLogin, produtos.removerProduto);
rotas.post('/produtos/:id/ativar',verificaLogin, produtos.ativarProduto);
rotas.post('/produtos/:id/desativar',verificaLogin, produtos.desativarProduto);
rotas.get('/categorias', produtos.listarCategorias);

module.exports = rotas;