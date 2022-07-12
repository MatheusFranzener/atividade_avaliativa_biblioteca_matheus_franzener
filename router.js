const express = require("express");
const router = express.Router();

const clientes = require("./api/clientes/clientes.controller");
const autores = require("./api/autores/autores.controller");
const editoras = require("./api/editoras/editoras.controller");
const livros = require("./api/livros/livros.controller");
const locacoes = require("./api/locacoes/locacoes.controller");
const livros_autores = require("./api/livros_autores/livros_autores.controller");

router.use("/clientes", clientes);
router.use("/autores", autores);
router.use("/editoras", editoras);
router.use("/livros", livros);
router.use("/locacoes", locacoes);
router.use("/livros_autores", livros_autores);

module.exports = router;