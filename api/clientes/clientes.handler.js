const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

async function criarCliente(cliente) {
    const novoCliente = await criar("clientes", null, cliente);
    return novoCliente;
}

async function buscarClientes() {
    const clientes = await buscar("clientes");
    return clientes;
}

async function buscarCliente(id) {
    const cliente = await buscarPorId("clientes", id);
    return cliente;
}

async function attCliente(id, cliente) {
    const attCliente = await criar("clientes", id, cliente);
    return attCliente;
}

async function deletarCliente(id) {
    const clienteDeletado = deletar('clientes', id);
    return clienteDeletado;
}

module.exports = {
    criarCliente,
    buscarClientes,
    buscarCliente,
    attCliente,
    deletarCliente
};


