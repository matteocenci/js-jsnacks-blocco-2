function stampa() {
    let array = []

    while(true) {
        let element = prompt("Dammi delle parole(scrivi 'stop' per terminare l'array): ");

        if (element.toLowerCase() === 'stop') {
            break
        }

        array.push(element);
    }


    return array;
}











// function creaArray () {
//     let array = [];

//     while (true) {
        
//         let number = prompt("Dammi un numero( scrivi 'stop' per terminare l'array): ");
//         if(number.toLowerCase() === 'stop') {
//             break;
//         }

//         array.push(parseInt(number));
//     }

//     return array

// }