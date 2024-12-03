function saveHouse(){
    let area = document.getElementById("Iarea").value;
    let numero = document.getElementById("Inumero").value;
    let bairro = document.getElementById("Ibairro").value;
    let cidade = document.getElementById("Icity").value;

    let newListValue = document.createElement("li");
    newListValue.innerHTML = `${area} m², Numero da casa ${numero}, Fica no bairro (${bairro}, Na cidade ${cidade}) `

    let removeButton = document.createElement("button")
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "removeHouse(this)");

    newListValue.appendChild(removeButton);

    document.getElementById("house-list").appendChild(newListValue);
}

function removeHouse(button){
    let liRemove = button.parentNode;
    document.getElementById("house-list").removeChild(liRemove);
}