import leia from 'readline-sync'
import Veiculo from './Veiculo';


var carro = new Veiculo();

var opcao = 0;
do{
    console.log("- - - - - -MENU- - - - - - - - - - -")
    opcao = leia.keyInSelect(["cadastrar veiculo", "Transferir veiculo", "Mostrar veiculos"]) + 1;
    switch(opcao){
        case 1:
            carro.addAccount();
            break;
        case 2:
            carro.transferirveiculo();
            break;
            case 3:
                carro.mostrarveiculo();    
            break;
           
    }
}while(opcao !== 0);