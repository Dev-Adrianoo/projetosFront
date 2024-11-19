let nameNav = prompt("Digite o nome da nave:");
let dobraEspacial = 0;
let entrarDobra = prompt("Deseja entrar em dobra espacial\n1. Sim\n2. Não");

while(true){
    if(entrarDobra == "1"){
    dobraEspacial += 1
    entrarDobra = prompt("Deseja entrar novamente na dobra escacial?\n1. Sim\n2. Não"); 
} else {
    alert(`Nave: ${nameNav}\nDobras dadas: ${dobraEspacial}`);
    break;
 }

}