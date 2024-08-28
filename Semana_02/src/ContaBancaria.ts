import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular, chavepix: string){
        this.titular = titular;
        this.chavepix = chavepix;
        this.datacriacao = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo'});
        this.saldo = 0;
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
    }

    numero: string;
    saldo: number;
    titular: Titular;
    chavepix: string;
    datacriacao: string;

    depositar(valor: number) {
        if(valor <= 1){
            console.log("VALOR DE DEPOSITO INVALIDO.")
            return;
        }

        this.saldo = this.saldo + valor;
        console.log(`Deposito de R$ ${valor} realizado com sucesso. Saldo atual e R$ ${this.saldo} `)
    }
    sacar(valor: number) {
        if(valor > this.saldo || valor <= 0){
            console.log(`Saldo insuficiente para saque!`);
            return;
        }

        this.saldo -= valor;
        console.log(`O saque de R$ ${valor} realizado com sucesso. Saldo atual e R$ ${this.saldo} `)
    }

    consultarsaldo() {
        console.log(`Seu saldo e de R$ ${this.saldo} `)
    }

    mostrardados() {
        console.log("- - - - - -DADOS CONTA- - - - - - - -")
        console.log(`Nome titular: ${this.titular.nome} `)
        console.log(`CPF do titular: ${this.titular.cpf} `)
        console.log(`data nascimento do titular: ${this.titular.datanascimento} `)
        console.log(`numero da conta: ${this.numero} `)
        console.log(`Chave pix: ${this.chavepix} `)
    }
}

