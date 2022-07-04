const express = require("express");
const router = express.Router();

const autoresHandler = require("./autores.handler");

router.get("/", async (req, res) => {
    const autores = await autoresHandler.getAutores();
    res.json(autores);
});

router.get("/:id", async (req, res) => {
    res.json(await autoresHandler.getAutoresById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await autoresHandler.criarAutor(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await autoresHandler.attAutor(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await autoresHandler.removerAutor(req.params.id));
});

module.exports = router;

