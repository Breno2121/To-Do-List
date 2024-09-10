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
        var indexorigem;
        var contaorigem = this.contas.findIndex(conta => conta.getNumero() === numerocontaorigem);
        for(var i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumero() === numerocontaorigem){
                indexorigem = 1;
            }
        }

        if (indexorigem === undefined) {
            console.log("A CONTA QUE VOCE DIGITOU NAO EXISTE!");
            return;
        }

        var numerodestino = leia.question("Digite o numero da conta de destino: ");
        var contadestino = this.contas.findIndex(conta => conta.getNumero() === numerodestino);
        if(contadestino === -1){
            console.log("A CONTA DE DESTINO NAO EXISTE!!")
        return;
        }

        var valor = leia.questionFloat("Digite o valor para transferir: ");
        if(valor > this.contas[contaorigem].getSaldo()){
            console.log(" VOCE NAO TEM SALDO SUFICIENTE..")
            return;
        }
        this.contas[contaorigem].sacar(valor);
        this.contas[contadestino].depositar(valor);

        
    }







    private adicionarConta(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`CONTA COM NUMERO ${conta.getNumero()} FOI CRIADA COM SUCESSO`);
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
        console.table(this.contas);

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