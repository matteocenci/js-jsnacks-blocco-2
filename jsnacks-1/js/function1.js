
/**
 * Description la funziona crea un array di 10 numeri random.
 * @returns {array}
 */
function generateArray () {

    let nArray = [];

    for (let i = 0; i < 10; i++) {
        let numberInArray = getRndInteger(1, 100);

        nArray.push(numberInArray);
    }

    return nArray
    
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/**
 * Description stampa l'array in pagina
 * @param {array} arrayToPrint
 */
function printArray(arrayToPrint) {

    const resultElem = document.getElementById("result");
    console.log(resultElem);

    resultElem.innerHTML += `<li> ${arrayToPrint} </li>`

}