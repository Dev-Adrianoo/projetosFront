function showInfo(){
    let name = document.getElementById("Inome").value;
    let favoriteColor = document.getElementById("Icolor").value;
    let likePrograming = document.querySelector("input[name='radio']:checked").value;
    let devolperOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    devolperOptions.forEach(element => {optionsValue.push(element.value )})
    let optionsChecked = optionsValue.join(", ");
    alert(`Nome: ${name}, cor favorita: ${favoriteColor}, gosta de programar? ${likePrograming}, quais seus conhecimentos? ${optionsChecked}`)
};