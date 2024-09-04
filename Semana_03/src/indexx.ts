import leia from 'readline-sync'
import Banco from "./Banco";


var nubank = new Banco();

var opcao = 0;
do{
    console.log("- - - - - -MENU- - - - - - - - - - -")
    opcao = leia.keyInSelect(["Criar conta", "Transferencia", "Cancelar conta", "Mostrar contas"]) + 1;
    switch(opcao){
        case 1:
            nubank.addAccount();
            break;
        case 2:
            console.log("Opcao Indisponnivel!!!");
            console.log(" - - -  - - - - - - - -  -");
            break;
            case 3:
                nubank.removeConta();    
            break;
            case 4:
                nubank.mostrarContas();    
            break;
    }
}while(opcao !== 0);











/*
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import Cadastro from './Cadastro';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

var NOME = leia.question("Digite o seu nome: ");
var CPF = leia.question("Digite o seu CPF: ");
var datanasc = leia.question("Digite a data de nascimento: ");

var cadast = new Cadastro(NOME, CPF, datanasc);
var t1 = new Titular(NOME, CPF, datanasc); 
console.log("CONTA NORMAL")
var c1 = new ContaBancaria(t1, "breno@gmail.com");
console.log("Conta normal!!")
c1.depositar(100);
c1.sacar(200);


console.log("- - - - -CONTA CORRENTE- - - - -")
var cc = new ContaCorrente (t1, "Breno@gmail.com");
cc.depositar(200);
cc.consultarsaldo();
cc.sacar(300);


console.log("- - - - - -CONTA POUPANCA- - - - -");
var cp = new ContaPoupanca(t1, "BRENIN@GMAIL.com.br");
cp.depositar(500);
cp.sacar(30);
*/