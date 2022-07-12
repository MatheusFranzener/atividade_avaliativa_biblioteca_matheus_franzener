const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

async function criarAutor(autor) {
    const novoAutor = await criar("autores", null, autor);
    return novoAutor;
}

async function buscarAutores() {
    const autores = await buscar("autores");
    return autores;
}

async function buscarAutor(id) {
    const autor = await buscarPorId("autores", id);
    return autor;
}

async function attAutor(id, autor) {
    const attAutor = await criar("autores", id, autor);
    return attAutor;
}

async function deletarAutor(id) {
    const autorDeletado = deletar('autores', id);
    return autorDeletado;
}

module.exports = {
    criarAutor,
    buscarAutores,
    buscarAutor,
    attAutor,
    deletarAutor,
    async
}