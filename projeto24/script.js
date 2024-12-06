testingArrow = {
    name: "Escola Javascript",
    normalFunction: function (){
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.normalFunction();