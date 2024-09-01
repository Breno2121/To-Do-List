import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import Cadastro from './Cadastro';

var NOME = leia.question("Digite o seu nome: ");
var CPF = leia.question("Digite o seu CPF: ");
var datanasc = leia.question("Digite a data de nascimento: ");

var cadast = new Cadastro(NOME, CPF, datanasc);
var t1 = new Titular(NOME, CPF, datanasc); 
var c1 = new ContaBancaria(t1, "breno@gmail.com");

c1.consultarsaldo();
c1.depositar(200);
c1.sacar(30);
c1.mostrardados();
cadast.clientecadastrado();

