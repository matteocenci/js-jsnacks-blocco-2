
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