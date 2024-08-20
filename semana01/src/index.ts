import leia from 'readline-sync'

var nomes: string[] = [];
var idades: number[] = [];

var nomemaisnova: string;
var idademaisnova: number;

var nomemaisvelha: string;
var idademaisvelha: number;


function pedirinfousuario(qtd: number) {
    for (var i = 0; i < qtd; i++) {
        var nome = leia.question("Digite o nome: ");
        nomes.push(nome);
        var idade = leia.questionInt("Informe a idade: ");
        idades.push(idade);
    }
}

function pessoamaisnova() {
    for (var i = 0; i < idades.length; i++) {
        if (idademaisnova === undefined || idades[i] < idademaisnova) {
            idademaisnova = idades[i];
            nomemaisnova = nomes[i];
        }
    }
    console.log(`A pessoa mais nova e : ${nomemaisnova} com ${idademaisnova} Anos. `);
}
function pessoamaisvelha() {
    idades.forEach((idade, index) => {
        if (!idademaisvelha || idade > idademaisvelha) {
            idademaisvelha = idade;
            nomemaisvelha = nomes[index];
        }
    })
    console.log(`A pessoa mais velha e : ${nomemaisvelha} com ${idademaisvelha} Anos. `);
}

pedirinfousuario(5);
pessoamaisnova();
pessoamaisvelha();


/*
for (var i = 0; i < 5; i++) {
    var nomeatual = leia.question("Digite o nome: ");
    var idadeatual = leia.questionInt("Digite a idade: ");
    nomes.push(nomeatual);
    idades.push(idadeatual);
    if (i == 0) {
        idademaisnova = idadeatual;
        nomemaisnova = nomeatual;
        idademaisvelha = idadeatual;
        nomemaisvelha = nomeatual;
    } else if(idademaisnova > idadeatual){
        idademaisnova = idadeatual;
        nomemaisnova = nomeatual;
    } else if(idademaisvelha < idadeatual){
        idademaisvelha = idadeatual;
        nomemaisvelha = nomeatual;
    }
}
console.log(`A Pessoa mais nova e: ${nomemaisnova} com ${idademaisnova} Anos`);
console.log(`A Pessoa mais velha e: ${nomemaisvelha} com ${idademaisvelha} Anos`);
*/