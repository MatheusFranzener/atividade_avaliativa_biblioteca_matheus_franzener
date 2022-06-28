const crud = require("./CRUD");

async function criarTabelaAutores(){
    const tabelaAutores = await crud.dados("autores",{
        id_autor:1,
        nome:"Matheus",
        nacionalidade:"brasileiro"
    });
    console.log(tabelaAutores);
}

criarTabelaAutores();

async function criarTabelaClientes(){
    const tabelaClientes = await crud.dados("clientes",{
        id_cliente:1,
        nome:"Carlos",
        telefone:"123",
        email:"carlos@gmail.com"
    });
    console.log(tabelaClientes);
}

criarTabelaClientes();

async function criarTabelaEditoras(){
    const tabelaEditoras = await crud.dados("editoras",{
        cnpj:"1234",
        nome:"Saraiva"
    });
    console.log(tabelaEditoras);
}

criarTabelaEditoras();

async function criarTabelaLivros(){
    const tabelaLivros = await crud.dados("livros",{
        codigo:1,
        titulo:"Pequeno Principe",
        genero:"Aventura"
    });
    console.log(tabelaLivros);
}

criarTabelaLivros();




