function verifyEnableElement(){
    let selectValue = document.querySelector("select").value;
    if(selectValue == "disabled"){
        document.getElementById("some-text").disabled = true;
        let pElement = document.getElementById("message");
        pElement.innerText = "DESABILITADO";
        pElement.style.color = "white";
        pElement.style.background = "red";
        pElement.style.borderRadius = "5px";
        pElement.style.padding = "15px";
        pElement.style.textAlign = "center";
    }else if (selectValue == "enabled"){
        document.getElementById("some-text").disabled = false;
        let pElement = document.getElementById("message");
        pElement.innerHTML = "HABILITADO";
        pElement.style.color = "white";
        pElement.style.background = "green";
        pElement.style.borderRadius = "5px";
        pElement.style.padding = "15px";
        pElement.style.textAlign = "center";
    }
}