import Veiculo from './enty/veiculo';
import './index.css';

var listaVeiculos: any = [];

document.getElementById("buton")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    var modeloinp = document.getElementById("modelo") as HTMLInputElement;
    var corinp = document.getElementById("cor") as HTMLInputElement;
    var anoinp = document.getElementById("ano") as HTMLInputElement;
    var precoinp = document.getElementById("preco") as HTMLInputElement;
    var imageminp = document.getElementById("imagem") as HTMLInputElement;

    // const novaCarro = {
    //     modelo: modeloinp.value,
    //     cor: corinp.value,
    //     ano: anoinp.value,
    //     preco: precoinp.value,
    //     imagem: imageminp.value
    //}
    
const novaCarro = new Veiculo (modeloinp.value, corinp.value, Number(anoinp.value), Number(precoinp.value), imageminp.value)

    listaVeiculos.push (novaCarro);
    (window as any).bancoAPI.createVeiculo(novaCarro);

    modeloinp.value = ""
    corinp.value = ""
    anoinp.value = ""
    precoinp.value = ""
    imageminp.value = ""

var conteudo = document.getElementById("conteudo");
conteudo.innerHTML = "";

for(var i = 0; i < listaVeiculos.length; i++){
    conteudo.innerHTML += `
    <div class="card">
    <img src="${listaVeiculos[i].getimagem()}" alt="" srcset="">
    <div class="dados">
      <strong>${listaVeiculos[i].getmodelo()}</strong>
      <span>${listaVeiculos[i].getcor()}</span>
      <span>${listaVeiculos[i].getano()}</span>
      <span>${listaVeiculos[i].getpreco()}</span>
    </div>
    <div class="botao-card">
      <button id="botao-ver">Ver</button>
      <button id="botao-deletar">Deletar</button>
    </div>
  </div>`;
}
})
