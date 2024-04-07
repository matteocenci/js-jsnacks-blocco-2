
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.


/**
 * Description
 * @returns {sameLength}
 */
function wordLength (word1, word2) {

    

    console.log(word1);
    console.log(word2);
    
    if (word1.length == word2.length) {
        console.log("Hanno la stessa lunghezza");
    } else if (word1.length > word2.length) {
        console.log("E' più lunga la parola " + word1);
    } else {
        console.log("E' più lunga la parola " + word2);
    }

    

    

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