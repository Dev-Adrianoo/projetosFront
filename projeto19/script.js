function setBlueBackground(){
    let element = document.getElementById("style-text");
    element.style.background = "blue"
    element.style.transition = "background-color 0.5s, color 0.5s"
}

function setTransparentBackground(){
    let element = document.getElementById("style-text");
    element.style.color = "transparent";
    element.style.background = "transparent";
    element.style.transition = "background-color 0.5s, color 0.5s"
}

function setRedColor(){
    let element = document.getElementById("style-text");
    element.style.color = "red";
    element.style.transition = "background-color 0.9s, color 0.9s"
}

function setAntiQueWhiteToBackground(){
    let body = document.getElementById("bodySelect");
    body.style.background = "antiquewhite";
    body.style.transition = "background-color 0.5s, color 0.5s"
}

function removeRedColor(){ 
    let body = document.getElementById("bodySelect");
    let element  = document.getElementById("style-text");
    element.style.color = "black";
    element.style.background = "transparent";
    body.style.background = "white";
    
}

function passouAqui(){
    let passou = document.getElementById("teste");
    passou.style.backgroundColor = "blue";
    passou.style.transition = "background-color 0.5s, color 0.5s"
}