// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

function creaArray () {
    let array = [];

    while (true) {
        
        let number = prompt("Dammi un numero( scrivi 'stop' per terminare l'array): ");
        if(number.toLowerCase() === 'stop') {
            break;
        }

        array.push(parseInt(number));
    }

    return array

}




function trovaIndice(array, element) {
    let indice = array.indexOf(element)

    if (indice === array.value){
        console.log(indice);
    } else {
        indice = -1;
    }
    
    return indice;


}