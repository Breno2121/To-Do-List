export default class Cadastro{
    constructor(nome: string, cpf: string, datanasc: string){
        this.nome = nome;
        this.cpf = cpf;
        this.datanasc = datanasc;
    }

    nome: string;
    cpf: string;
    datanasc: string;

    clientecadastrado(){
        console.log(`- - - - - -Cliente cadastrado- - - - - -`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de nascimento: ${this.datanasc}`);
    }
}