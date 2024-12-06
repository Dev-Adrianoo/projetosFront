class App {
    addProperty(){
        event.preventDefault();
        let kind = document.querySelector("select[name='kind']").value;
        let area = document.querySelector("input[name='area']").value;
        let rented = document.querySelector("input[name='rented']").value;
        let property = new property(kind, area, rented);
        this.addOnPropertiesList(property);
        this.cleanForm();
    }

    addOnPropertiesList(property){
        let listElement = document.createElement("li");
        let propertyInfo = ` Tipo: ${property.kind} (Área: ${property.area}) `
        if(property.rented){
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark);
        }
        listElement.innerHTML += propertyInfo;
        let buttonRemove = this.removeButton();
        listElement.appendChild(buttonRemove);
        document.getElementById("properties").appendChild(listElement);
    }

    createRentedMark(){
        let rentedMark = document.createElement("span");
        rentedMark.style.color = "white";
        rentedMark.style.background = "red";
        rentedMark.innerText = "ALUGADO";
        return rentedMark;
    }

    createRemoveButton(){
        let buttonRemove = document.createElement("button");
        buttonRemove.setAttribute("onclick", "app.remove(this)");
        buttonRemove.innerText = "Remover";
        return buttonRemove;
    }

    cleanForm(){
        document.querySelector("input[name='area']").value = " "
        document.querySelector("input[name='rented']").checked = false
    }

    remove(){
        let liToRemove = event.target.parentNode;
        document.getElementById("properties").removeChild(liToRemove);
    }
}