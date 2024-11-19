let nameNav  = prompt("Digite o nome da Nave: ");
let trocaCaractere = prompt("Qual caractere você deseja subistituir:");
let trocaCaractere2 = prompt("por Qual caractere deseja substituir: ");

let newNameNav = " ";

for(i = 0; i < nameNav.length; i++){
    if(nameNav[i] == trocaCaractere){    
        newNameNav = trocaCaractere2;
    } else {
        newNameNav += nameNav[i];
    }
}

alert(`Nome original: ${nameNav}\nNovo nome: ${newNameNav}`);