import leia from 'readline-sync'
import { keyInSelect } from "readline-sync";
import ContaBancaria from "./ContaBancaria";
import Titular from './Titular';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

export default class Banco {
    private contas: ContaBancaria[] = [];

    public tranferir() {
        var numerocontaorigem = leia.question("Digite o numero da conta: ");
        var numerodestino = leia.question("Digite o numero de destino: ");
        var valortransf = leia.question("Digite o valor para transferencia: ");

        var contaorigem = this.contas.findIndex(conta => conta.getNumero() === numerocontaorigem);
        var contadestino = this.contas.findIndex(conta => conta.getNumero() === numerodestino);

    }


    private adicionarConta(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`CONTA com ${conta.getNumero()} FOI CRIADA COM SUCESSO`);
        console.log(" - - - - - - - -  - - - - - - - -  -");
    }

    public addAccount() {
        var nome = leia.question("Digite seu nome: ");
        var cpf = leia.question("Digite seu cpf: ");
        var chavepix = leia.question("Digite sua chave pix: ");
        var tipodeconta = keyInSelect(["CORRENTE", "POUPANCA"]) + 1;

        var titular = new Titular(nome, cpf, "");


        var conta: ContaBancaria;
        if (tipodeconta === 1) {
            conta = new ContaCorrente(titular, chavepix);
        } else {
            conta = new ContaPoupanca(titular, chavepix);
        }

        this.adicionarConta(conta);
    }

    public mostrarContas() {
        console.log("- - - - - - - -TODAS CONTAS- - - - - - -");
        console.log(this.contas);

    }

    public removeConta() {
        console.log("- - - - - - -DELETAR CONTA- - - - - - - - -")
        var numeroConta = leia.question("Digite o numero da conta para deletar: ");
        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                this.contas.splice(i, 1);
                console.log("Conta removida com sucesso!!!")
                return;
            }
        }

        console.log(`Nao foi encontrado a conta${numeroConta}`)

    }
}