import { get } from "http";
import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular, chavepix: string) {
        this.titular = titular;
        this.chavepix = chavepix;
        this.datacriacao = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        this.saldo = 500;
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
    }

    private numero: string;
    private saldo: number;
    private titular: Titular;
    private chavepix: string;
    private datacriacao: string;

    public getNumero() {
        return this.numero;
    }
    public setNumero(numero:  string):  string {
        this.numero = numero
        return this.numero;
    }
    public getSaldo() {
        return this.saldo;
    }
    public setSaldo(Saldo: number): number {
        this.saldo = Saldo
        return this.saldo;
    }
    public getTitular() {
        return this.titular;
    }
    public getChavepix() {
        return this.chavepix;
    }
    public getDatacriacao() {
        return this.datacriacao;
    }
    depositar(valor: number) {
        if (valor <= 1) {
            console.log("VALOR DE DEPOSITO INVALIDO.")
            return;
        }

        this.saldo = this.saldo + valor;
        console.log(`Deposito de R$ ${valor} realizado com sucesso. Saldo atual e R$ ${this.saldo} `)
    }
    sacar(valor: number) {
        if (valor > this.saldo || valor <= 0) {
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
