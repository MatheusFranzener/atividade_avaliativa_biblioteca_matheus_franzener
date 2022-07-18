const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');
const livrosAutores = require('../livros_autores/livros_autores.handler')

async function criarLivro(livro) {
    const novoLivro = await criar("livros", null, livro);
    livro.id_autores.forEach( async e => {
        e.id_livro = novoLivro.id;
        await livrosAutores.criarLivrosAutor(e);
    });
    return novoLivro;
}

async function buscarLivros() {
    const livros = await buscar("livros");
    return livros;
}

async function buscarLivro(id) {
    const livro = await buscarPorId("livros", id);
    return livro;
}

async function attLivro(id, livro) {
    const attLivro = await criar("livros", id, livro);
    return attLivro;
}

async function deletarLivro(id) {
    const livroDeletado = deletar("livros", id);
    return livroDeletado;
}

module.exports = {
    criarLivro,
    buscarLivros,
    buscarLivro,
    attLivro,
    deletarLivro
};


