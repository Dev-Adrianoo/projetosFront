function save(){
    event.preventDefault();
    let nome = document.getElementById("Inome").value;
    let programaEm = document.getElementById("iprograma").value;
    alert(`Nome: ${nome}\nprograma na linguagem: ${programaEm}`);
}