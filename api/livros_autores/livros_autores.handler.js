const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

async function criarLivrosAutor(livroAutor) {

    const livrosAutor = await criar("livros_autor", null, livroAutor);
    return livrosAutor;
}

async function buscarLivrosAutores() {
    const livrosAutores = await buscar("livros_autor");
    return livrosAutores;
}

async function buscarLivrosAutor(id) {
    const livrosAutor = await buscarPorId("livros_autor", id);
    return livrosAutor;
}

async function attLivrosAutor(id, livrosAutor) {
    const attLivrosAutor = await criar("livros_autor", id, livrosAutor);
    return attLivrosAutor;
}

async function deletarLivosAutor(id) {
    const livrosAutorDeletado = deletar("livros_autor", id);
    return livrosAutorDeletado;
}

module.exports = {
    criarLivrosAutor,
    buscarLivrosAutores,
    buscarLivrosAutor,
    attLivrosAutor,
    deletarLivosAutor
};


