const express = require("express");
const router = express.Router();

const clientes = require("./api/clientes/clientes.controler");
const autores = require("./api/autores/autores.controler");
const editoras = require("./api/editoras/editoras.controler");
const livros = require("./api/livros/livros.controler");

router.use("/clientes",clientes); 
router.use("/autores",autores);
router.use("/editoras",editoras);
router.use("/livros",livros);

module.exports = router;