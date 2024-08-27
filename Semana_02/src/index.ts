import Dono from "./Dono";
import Cachorro from "./Cachorro";
var d1 = new Dono("BReno", "(48) 99999-9999");

var c1 = new Cachorro("Brutus", "Pikbuu", d1);

c1.exibirCachorro();
c1.exibirdono();

var c2 = new Cachorro("Brabao", "pudou", d1);
c2.cor = "Yellow";
c2.exibirCachorro();

var dataatual = new Date();

console.log(dataatual);
