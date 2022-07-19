const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');
const livrosAutores = require('../livros_autores/livros_autores.handler')

async function criarLivro(livro) {
    const listaAutores = livro.id_autores;
    delete livro.id_autores;

    const novoLivro = await criar("livros", null, livro);
    
    listaAutores.forEach( async e => {
        e.id_livro = novoLivro.id;
        await livrosAutores.criarLivrosAutor(e);
        console.log("Passando aq");
    });
    return novoLivro;
}

async function buscarLivros() {
    const livros = await buscar("livros");
    return livros;
}

async function buscarLivro(id) {
    const livro = await buscarPorId("livros", id);
    console.log(livro);  
    return livro;
}

async function attLivro(id, livro) {
    const attLivro = await criar("livros", id, livro);
    return attLivro;
}

async function mudarStatus(id){
    const attLivro = await mudarStatus("livros", id);
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


