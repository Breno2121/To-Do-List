
/*_______OUTRO ARQUIVO______ */
import leia from 'readline-sync'
import { Celular, cadastracelular } from './repository/CelularRepository';
import { Pessoa, cadastrapessoa } from './repository/PesssoaRepository';


var cor = leia.question("Cor do celular: ");
var marca = leia.question("Marca do celular: ");
var modelo = leia.question("Modelo do celular: ");
var tamanhotela = leia.questionInt("tamanho da tela: ");

var celular: Celular = {
    tamanhotela: tamanhotela,
    marca: marca,
    cor: cor,
    modelo: modelo
}
cadastracelular(celular);



var nome = leia.question("Digite o nome: ")
var cpf = leia.questionInt("Digite o cpf: ")
var dtnascimento = leia.questionInt("Digite a data de nascimento: ")
var telefone = leia.questionInt("Digite o telefone: ")
var email = leia.question("Digite o email: ")

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    datanascimento: dtnascimento,
    contatos: {
        telefones: [telefone],
        email: [email]
    },
    celular: celular
}

cadastrapessoa(pessoa)
console.log(pessoa)
