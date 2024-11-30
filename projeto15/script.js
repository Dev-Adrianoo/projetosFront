function addNewPhone(){
    const phoneform = document.getElementById("phones")
    const newPhone = phoneform.children[0].cloneNode(true);
    const phonePosition = phoneform.children.length + 1;
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": ";
    phoneform.appendChild(newPhone);
    console.log(phoneform.children);
}

function printPhones(){
    let message = "";
    const phones = document.querySelectorAll("input[name='telefone']");
    phones.forEach((phone, index) => {
        message += "Telefone" + (index + 1) + ": " + phone.value + "\n";
    })
}