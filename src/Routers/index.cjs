const express = require('express');
const Rotas = express.Router(); //Gerenciador de rotas do express
const ClienteControllers = require ("../../Back-End/Controllers/ClienteControllers.cjs");
const GruposControllers = require ("../../Back-End/Controllers/GruposControllers.cjs");

// Rotas Model Clientes
Rotas.get("/listar",ClienteControllers.index);
Rotas.post("/add",ClienteControllers.addCliente);
// Rotas Models Grupos
Rotas.get("/listarGrupos",GruposControllers.ListGrupos);// Listar todos os grupos
Rotas.get("/listOneGrupo/:id",GruposControllers.ListOneGrupo);// Listar um grupos pelo id
Rotas.post("/addGrupo",GruposControllers.AddGrupos);// Adicionar grupos
Rotas.put("/atualizar/:id",GruposControllers.atualizar);// Atualizar um grupos pelo id
Rotas.delete("/deletar/:id",GruposControllers.DeleteGrupo);// Deletar um grupos pelo id

module.exports = Rotas