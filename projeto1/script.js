let navName = prompt("Digite o nome da nave: ");

let velocity = 0

function Acelerar(velocity, newVelocity, option){
    newVelocity = 0;
    option = parseInt(prompt("Deseja aumentar a velocidade?\n1. Sim\n2. Não"));
    if(option == 1){
        velocity += 5;
        alert(`Nova Velocidade atual nave ${navName}: ${velocity}`);
    }else {
        alert(`Velocidade atual nave ${navName}: ${velocity}`);
    }
    return velocity;
}

function Desacelerar(velocity){
    velocity -= 5;
    alert(`Velocidade atual nave ${navName}: ${velocity}`);
    return velocity;
}

function menu(option){

    while(option !=3){
    option = parseInt(prompt("Digite a opção escolhida:\n1. Acelerar Nave\n2. Desacelerar Nave\n3. Sair"));

        if(isNaN(option)){
            alert("OPÇÃO INVALIDA, POR FAVOR INSIRA UM NÚMERO.");
            return menu();
        }

        switch(option){
            case 1:
              velocity = Acelerar(velocity);
                break;
            case 2:
                velocity = Desacelerar(velocity);
                break;
            case 3:
                alert("SAINDO BOBÃO...");
                return;
    }
  }
}

    menu()