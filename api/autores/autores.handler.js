const { async } = require('@firebase/util');
const {criar, get, getById, remove} = require('../../CRUD/index');

async function criarAutor(autor){
    const novoAutor = await criar("autores", null, autor);
    return novoAutor;
}

async function getAutores(){
    const autores = await get("autores");
    return autores;
};

async function getAutoresById(id){
    const autor = await getById("autores", id);
    return autor;
}

async function attAutor(id, autor){
    const attAutor = await criar("autores", id, autor);
    return attAutor;
}

async function removerAutor(id){
    const autorRemovido = remove('autores', id);
    return autorRemovido;
}

module.exports = {
    criarAutor,
    getAutores,
    getAutoresById,
    attAutor,
    removerAutor,
    async
}