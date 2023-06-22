const express = require('express');
const Rotas = express.Router(); //Gerenciador de rotas do express
const ClienteControllers = require ("../../Back-End/Controllers/ClienteControllers.cjs");
const GruposControllers = require ("../../Back-End/Controllers/GruposControllers.cjs");

// Rotas Model Clientes
Rotas.get("/listar",ClienteControllers.index);
Rotas.post("/add",ClienteControllers.addCliente);
// Rotas Models Grupos
Rotas.get("/listarGrupos",GruposControllers.ListGrupos);// Listar todos os produtos
Rotas.get("/listOneGrupo/:id",GruposControllers.ListOneGrupo);// Listar um produtos pelo id
Rotas.post("/addGrupo",GruposControllers.AddGrupos);// Adicionar produtos
Rotas.put("/atualizar/:id",GruposControllers.atualizar);// Atualizar um produtos pelo id
Rotas.delete("/deletar/:id",GruposControllers.DeleteGrupo);// Deletar um produto pelo id

module.exports = Rotas