let nomePessoaVelha = prompt("Digite o nome da pessoa mais velha: ");
let idadePessoaVelha = prompt("Digite a idade da pessoa mais velha: ");
let nomePessoaNova = prompt("Digite o nome da pessoa mais nova: ");
let idadePessoaNova = prompt("Digite a idade da pessoa mais nova: ");

const diferencaIdade = idadePessoaVelha - idadePessoaNova;

alert(`Nome da pessoa mais velha: ${nomePessoaVelha}\nidade da pessoa mais velha é : ${idadePessoaVelha}`);
alert(`Nome da pessoa mais nova: ${nomePessoaNova}\nidade da pessoa mais nova é : ${idadePessoaNova}`);
alert(`Diferença de idade é: ${diferencaIdade} anos`);