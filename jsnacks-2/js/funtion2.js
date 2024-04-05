
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.


/**
 * Description
 * @returns {sameLength}
 */
function wordLength (sameLength) {

    for (i = 0; i < firstWord.length; i++) {

        console.log(firstWord.length);
        console.log(secondWord.lenght);

        if (firstWord.length == secondWord.length) {
            console.log("Hanno la stessa lunghezza");
        } else if (firstWord.length > secondWord.length) {
            console.log("E' più lunga la parola " + firstWord);
        } else {
            console.log("E' più lunga la parola " + secondWord);
        }

    }

    return sameLength;

}

/**
 * Description
 * @param {any} wordToPrint
 * 
 */
function printWord(wordToPrint) {

    const resultElem = document.getElementById("result");
    console.log(resultElem);

    resultElem.innerHTML += `<li> ${wordToPrint} </li>`

}