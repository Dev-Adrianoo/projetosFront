let distanceLightYear = parseInt(prompt("Digite a distancia a anos luz: "));

let chooseOption = parseInt(prompt("\n1. Parsec(pc)\n2. Unidade Astronômica(AU)\n3. Quilômetros\n"));

switch(chooseOption){
    case 1: //Parsec
    let conversionLy = 0.306601;
    let conversionFinale = distanceLightYear / conversionLy;
    alert(`Distancia em anos luz ${distanceLightYear}, distancia convertida em Parsec: ${conversionFinale}`);
        break;
    case 2: // Unidade Astronômica
        let conversionAU = 63241.1;
        let conversionFinaleAU = distanceLightYear * conversionAU;
        alert(`Distancia em anos luz ${distanceLightYear}, distancia convertida em AU ${conversionFinaleAU}`);
        break;
    case 3: // Quilometros
        let conversionKM = 9.46112;
        let conversionFinaleKM = distanceLightYear * conversionKM;
        alert(`Distancia em anos luz ${distanceLightYear}, distancia convertida em KM ${conversionFinaleKM}`);
        break;
    default:
        alert("Opção invalida! ");
        break
}