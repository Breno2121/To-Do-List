import leia from 'readline-sync'

type Categoria = {
    codigo: number,
    marca: string
}

type Produto = {
    nome: string,
    peso: number,
    valor: number,
    categoria: Categoria
}

var codigo = leia.questionInt("Digite o codigo do produto: ")
var marca = leia.question("Digite a marca: ")

const categoria: Categoria = {
    codigo: codigo,
    marca: marca
}


var nome = leia.question("Digite o nome do produto: ")
var peso = leia.questionInt("Digite o peso: ")
var valor = leia.questionInt("Digite o valor: ")
var categoria =leia.question("Digite a categoria: ")

const produto: Produto = {
    nome: nome,
    peso: peso,
    valor: valor,
    categoria: categoria
}
