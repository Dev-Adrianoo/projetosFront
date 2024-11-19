let departureDateEntry = prompt("Digite a data de partida (DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let diferenceDate = today - departureDate;

let choseOption = parseInt(prompt("Como você gostaria de exibir o tempo partida?\n1. Segundos\n2. Minutos\n3. Horas\n4. Dias\n"));

    switch(choseOption){
        case 1:
            let secondsOfDeparture = Math.round(diferenceDate / 1000);
            alert(`Tempo de partida em segundos:  ${secondsOfDeparture}`);
            break;
        case 2:
            let minutesOfDeparture = Math.round(departureDate / 1000 / 60);
            alert(`Tempo de partida em Minutos: ${minutesOfDeparture}`);
            break;
        case 3:
            let hoursOfDeparture = Math.round(departureDate / 1000 / 3600);        
            alert(`Tempo de partida em horas: ${hoursOfDeparture}`);
            break;
        case 4:
            let daysOfDeparture = Math.round(departureDate / 1000 / 3600 / 24);
            alert(`Tempo de partida em Dias: ${daysOfDeparture}`);
            break;
        default:
            alert("Opção invalida!");
            break;
    }