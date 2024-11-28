/*
    1. nave deve partir da velocidade 0 km/s
    2. Menu deve ser exibido para o usuário perguntando se ele quer acelerar ou parar a nave. obs se ele quiser parar uma mensagem deve ser exibida co as caracteresticas da nave(nome e tipo) e em que velocidade ele estava.
    ee ele quiser acelerar, deve ser exibido um prompt para que ele informe o quanto ele quer acelerar e este valor será incrementado na velocidade.
    3. quando a velocidade for incrementada , deve-ser fazer uma verificação para ver se a espaçonave está acima da velocidade máxima dela.
    se ela estiver uma mensagem deve ser exibida infromando a velocidade da nave e a velocidade máxima permitida.

    exibir um prompt para a nome da nave
    exibir um prompt para o tipo da nave
    exibir um prompt para a velocidade máxima da nave
    exibir um prompt perguntando se o usuário quer acelerar ou parar
    se ele quiser parar, vamos exibir a mensagem final
    se ele quiser acelerar precisamos de um prompt para que o usuário informe o quanto ele quer acelerar
    exibir uma mensagem de alerta quando a velocidade máxima for ultrapassada
    
    criar um objeto para a nave
    */

let spaceship = {
    velocity: 0,
    speedUp: function(aceleration){
        this.velocity += aceleration;
    }
}

function registerSpaceship (){
    spaceship.name = prompt("Digite o nome da nave: ");
    spaceship.tipo = prompt("Digite o tipo da nave: ");
    spaceship.maxVel = Number(prompt("Digite a velocidade maxima: "));
}

function spaceshipAcelerarOuParar (question){
    let aceleration = Number(prompt("Quanto você quer acelerar?"))
    spaceship.speedUp +=aceleration;
    if (spaceship.velocity > spaceship.maxVel){
        alert("Velocidade maxima ultrapassada!")
    }
    question = prompt("Deseja continuar ou parar?\n1. Continuar\n2. Parar");
    if(question == "1"){

    }
}