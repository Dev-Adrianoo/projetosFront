/*
    Temos abaixo, uma array bidimensional de naves que estão engatadas numa estação espacial.

    para cada sub-array, a primeira posição é o nome da nave, a segunda posição é a quantidade de tripulantes e a terceira informa se o processo de engate já foi concluído ou não.

    Nesta lista, a plataforma de engate que a nave está parada é o [índice da nave no array + 1]

    example const NavesEngatadas = [
    ["Fenix", 8 , true], ["Gólias", 10, true], ["Helmet", 5 , false] , ["Elemental", 3, true], ["Darwin", 15 ,false]
    ];

    1. Filtrar o nome das naves que tem mais de 9 tripulantes
    2. Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente: obs: utilize a função findIndex, que é bem parecida com o find, mas retorna o índice de um filtro em vez do elemento do Array
    3. Destacar o nome de todas as naves colando-as em caixa alta e exibindo
    4. Exibir uma alerta com todos estas informações
*/

let hitchedSpaceships = [ 
                          ["Fenix", 8, true],
                          ["Gólias", 10, true], 
                          ["Helmet",5, false], 
                          ["Elemental", 3, true], 
                          ["Darwin",15, false] 
                        ]



let findTripulances = hitchedSpaceships.filter(elements => {return elements[1] >= 9})
let filterAgain = findTripulances.map(elements => elements[0]);

let filterPlataform = hitchedSpaceships.findIndex(spaceship => spaceship[2] == false) + 1;


let namesArray = hitchedSpaceships.map(spaceship => spaceship[0]);
let joinName = namesArray.join(' ');

console.log(`Naves cujo têm 9 ou mais tripulantes\n${filterAgain.join(', ')}`); 
console.log(`Índice da primeira nave com false no terceiro elemento: ${filterPlataform}`);
console.log(`Todos os nomes das naves: ${joinName}`);