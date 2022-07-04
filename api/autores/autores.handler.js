const {criar, get, getById, remove} = require('../../CRUD/index');

const criarAutor = async (autor) => {
    const novoAutor = await criar("autores", null, autor);
    return novoAutor;
}

const getAutores = async (req, res) => {
    const autores = await get("autores");
    return autores;
};

const getAutoresById = async (id) => {
    const autor = await getById("autores", id);
    return autor;
}

const attAutor = async (id, autor) => {
    const attAutor = await criar("autores", id, autor);
    return attAutor;
}

const removerAutor = async (id) => {
    const autorRemovido = remove('autores', id);
    return autorRemovido;
}

module.exports = {
    criarAutor,
    getAutores,
    getAutoresById,
    attAutor,
    removerAutor
}