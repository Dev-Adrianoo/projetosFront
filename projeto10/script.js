/*
    Neste exercício vamos simular o computador de bordo de uma espaçonave no momento em que ela inicia a parada até abrir as comportas para os pilotos saírem.

    1.Considerem que a nave está a 150Km/s.
    2.Crie uma função para desacelerar 20km/s a cada segundo. obs: Considere no código, que a cada iteração de um laço de repetição é 1 segundo.
    3.Esta função será uma HOF e também deve imprimir a cada atualização que houver na velocidade da nave. obs: esta impressão deve ser feita por meio de callback que essa função receberá.
    4. Ao final, exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.
*/

let velocidadeNave = 150;

    
const desacelerarNave = (novaVelocidade, printer) => {
    let desaceleracao = 20
    while(novaVelocidade > 0) {
        printer(novaVelocidade);
        novaVelocidade -= desaceleracao;
    }
    console.log("NAVE PARADA. AS COMPORTAS PODEM SER ABERTAS.");
}

desacelerarNave(velocidadeNave, function(novaVelocidade) {
    console.log("Velocidade atual: " + novaVelocidade);
})

