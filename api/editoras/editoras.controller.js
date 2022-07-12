const express = require("express");
const router = express.Router();

const editorasHandler = require("./editoras.handler");

router.get("/", async (req, res) => {
    const editoras = await editorasHandler.buscarEditoras();
    res.json(editoras);
});

router.get("/:id", async (req, res) => {
    res.json(await editorasHandler.buscarEditora(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await editorasHandler.criarEditora(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await editorasHandler.attEditora(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await editorasHandler.deletarEditora(req.params.id));
});

module.exports = router;


