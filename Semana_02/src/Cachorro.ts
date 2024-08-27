import Dono from "./Dono";

export default class Cachorro{
    constructor(nome: string, raca: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.dono = dono;
    }
    nome: string;
    raca: string;
    cor!: string;
    dono: Dono;
    
    exibirCachorro(){
        console.log(`O Cachorro ${this.nome} de raca ${this.raca} e cor ${this.cor} esta latindo... AU AU Cachorro do mau!!!`);
    }
    exibirdono(){
        console.log(`O dono ${this.dono.nome} esta disponivel pelo telefone ${this.dono.telefone}`);
    }
}

