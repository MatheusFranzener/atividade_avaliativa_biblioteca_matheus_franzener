const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

async function criarEditora(editora) {
    const novaEditora = await criar("editoras", null, editora);
    return novaEditora;
}

async function buscarEditoras() {
    const editoras = await buscar("editoras");
    return editoras;
}

async function buscarEditora(id) {
    const editora = await buscarPorId("editoras", id);
    return editora;
}

async function attEditora(id, editora) {
    const attEditora = await criar("editoras", id, editora);
    return attEditora;
}

async function deletarEditora(id) {
    const editoraDeletada = deletar("editoras", id);
    return editoraDeletada;
}

module.exports = {
    criarEditora,
    buscarEditoras,
    buscarEditora,
    attEditora,
    deletarEditora
};


