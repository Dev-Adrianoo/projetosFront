function doChange(){
    let textinhoPapai = document.getElementById("textinhoPapai");
    textinhoPapai.addEventListener("change", function(event){
        alert(event.target.value);
    })
    let changeEvent = new Event("change");
    textinhoPapai.dispatchEvent(changeEvent);
}

doChange();
