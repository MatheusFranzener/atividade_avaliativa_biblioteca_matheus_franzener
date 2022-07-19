const { async } = require('@firebase/util');
const { criar, buscar, buscarPorId, deletar } = require('../../CRUD/index');

const livro = require('../livros/livros.handler');
const {buscarClientes} = require("../clientes/clientes.handler");

async function criarLocacao(locacao) {
    const novaLocacao = await criar("locacoes", null, locacao);    
    const listaLivros = locacao.id_livros;

    listaLivros.forEach(async e => {
        e.status = "Alugado";
        console.log(e.id_livro);
        const objetoLivro = await livro.buscarLivro(e.id_livro);
        await livro.attLivro(e.id_livro, objetoLivro);
    });
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

// async function verificarCliente(id){
//     const listaClientes = buscarClientes();
//     (await listaClientes).forEach(function (e){
//         if(e.cpf_cliente == id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

module.exports = {
    criarLocacao,
    buscarLocacoes,
    buscarLocacao,
    attLocacao,
    deletarLocacao,
    // verificarCliente
};


