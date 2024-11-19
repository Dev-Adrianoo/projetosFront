let namePiloto = prompt("Digite o nome do piloto: ");
let velocityNav = 0; 

velocityNav = prompt("Qual velocidade você gostaria de acelerar a nave: ");

let confirmacaoVelocidade = confirm(`Sua velocidade no momento está em ${velocityNav}Km/s`);

if(velocityNav <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocityNav < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (velocityNav > 40 && velocityNav < 80){
    alert("Parece uma boa velocidade para manter");
} else if (velocityNav > 80 && velocityNav < 100){
    alert("Velocidade alta, considere diminuir");
}else {
    alert("Velocidade perigosa. Controle automatico Forçado.");
}

alert(`name piloto: ${namePiloto}\nyou velocity is: ${velocityNav}`);