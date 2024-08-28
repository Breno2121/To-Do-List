export default class Titular{
    constructor(nome: string, cpf: string, datanascimento: string){
        this.nome = nome;
        this.cpf = cpf;
        this.datanascimento = datanascimento;
    }

    nome: string;
    cpf: string;
    datanascimento: string;
}
