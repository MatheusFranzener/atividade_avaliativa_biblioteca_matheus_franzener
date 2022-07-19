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
    
    // if(locacoesHandler.verificarCliente(locacao.cpf_cliente) == true) {
    //     res.status(400).send("O cliente não existe!");
    // } else {
    // }
    
    res.json(await locacoesHandler.criarLocacao(locacao));
});

router.put("/:id", async (req, res) => {
    res.json(await locacoesHandler.attLocacao(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await locacoesHandler.deletarLocacao(req.params.id));
});

module.exports = router;