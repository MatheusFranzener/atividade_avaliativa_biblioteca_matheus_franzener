const express = require("express");
const router = express.Router();

const autoresHandler = require("./autores.handler");

router.get("/", async (req, res) => {
    const autores = await autoresHandler.buscarAutores();
    res.json(autores);
});

router.get("/:id", async (req, res) => {
    res.json(await autoresHandler.buscarAutor(req.params.id));
});

router.post("/", async (req, res) => {
    const autor = req.body;
    if(autor.nome && autor.nacionalidade){
        res.json(await autoresHandler.criarAutor(req.body));
    } else {
        res.status(400).send("Preencha os campos!");
    }
});

router.put("/:id", async (req, res) => {
    res.json(await autoresHandler.attAutor(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await autoresHandler.deletarAutor(req.params.id));
});

module.exports = router;

