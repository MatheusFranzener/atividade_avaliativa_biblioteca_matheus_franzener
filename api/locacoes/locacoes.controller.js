const express = require("express");
const router = express.Router();

const locacoesHandler = require("./locacoes.handler");

router.get("/", async (req, res) => {
    const locacoes = await locacoesHandler.buscarLocacoes();
    res.json(locacoes);
});

router.get("/:id", async (req, res) => {
    res.json(await locacoesHandler.buscarLocacao(req.params.id));
});

router.post("/", async (req, res) => {
    const locacao = req.body;
    if(locacao.livro_codigo && locacao.cpf_cliente){
        res.json(await locacoesHandler.criarLocacao(locacao));
    } else {
        res.status(400).send("Preencha os campos!");
    }
});

router.put("/:id", async (req, res) => {
    res.json(await locacoesHandler.attLocacao(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await locacoesHandler.deletarLocacao(req.params.id));
});

module.exports = router;