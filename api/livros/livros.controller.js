const express = require("express");
const router = express.Router();

const livrosHandler = require("./livros.handler");

router.get("/", async (req, res) => {
    const editoras = await livrosHandler.buscarLivros();
    res.json(editoras);
});

router.get("/:id", async (req, res) => {
    res.json(await livrosHandler.buscarLivro(req.params.id));
});

router.post("/", async (req, res) => {
    const livro = req.body;
    if (livro.id_editora) {
        res.json(await livrosHandler.criarLivro(req.body));
    } else {
        res.status(400).send("Preencha os campos!");
    }
});

router.put("/:id", async (req, res) => {
    res.json(await livrosHandler.attLivro(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await livrosHandler.deletarLivro(req.params.id));
});

module.exports = router;


