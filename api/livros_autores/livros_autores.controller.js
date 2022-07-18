const express = require("express");
const router = express.Router();

const livros_autoresHandler = require("./livros_autores.handler");

router.get("/", async (req, res) => {
    const livrosAutores = await livros_autoresHandler.buscarLivrosAutores();
    res.json(livrosAutores);
});

router.get("/:id", async (req, res) => {
    res.json(await livros_autoresHandler.buscarLivrosAutor(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await livros_autoresHandler.criarLivrosAutor(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await livros_autoresHandler.attLivrosAutor(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await livros_autoresHandler.deletarLivosAutor(req.params.id));
});

module.exports = router;