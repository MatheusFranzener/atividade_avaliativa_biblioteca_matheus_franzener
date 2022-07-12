const express = require("express");
const router = express.Router();

const clientesHandler = require("./clientes.handler");

router.get("/", async (req, res) => {
    const clientes = await clientesHandler.buscarClientes();
    res.json(clientes);
});

router.get("/:id", async (req, res) => {
    res.json(await clientesHandler.buscarCliente(req.params.id));
});

router.post("/", async (req, res) => {
    const cliente = req.body;
    if(cliente.cpf){
        res.json(await clientesHandler.criarCliente(req.body));
    } else {
        res.status(400).send("Preencha os campos!");
    }
});

router.put("/:id", async (req, res) => {
    res.json(await clientesHandler.attCliente(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await clientesHandler.deletarCliente(req.params.id));
});

module.exports = router;

