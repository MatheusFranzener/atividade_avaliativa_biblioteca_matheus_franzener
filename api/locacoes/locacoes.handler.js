const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

async function criarLocacao(locacao) {
    const novaLocacao = await criar("locacoes", null, locacao);
    return novaLocacao;
}

async function buscarLocacoes() {
    const locacoes = await buscar("locacoes");
    return locacoes;
}

async function buscarLocacao(id) {
    const locacao = await buscarPorId("locacoes", id);
    return locacao;
}

async function attLocacao(id, livro) {
    const attLocacao = await criar("locacoes", id, livro);
    return attLocacao;
}

async function deletarLocacao(id) {
    const locacaoDeletada = deletar("locacoes", id);
    return locacaoDeletada;
}

module.exports = {
    criarLocacao,
    buscarLocacoes,
    buscarLocacao,
    attLocacao,
    deletarLocacao
};


