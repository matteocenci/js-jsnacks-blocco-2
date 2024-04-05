// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// Chiedere all'utente un numero
// Finchè non raggiungi il numero N, devi creare un Array e stamparlo a schermo

let N = parseInt(prompt("Dammi un numero: "));
console.log(N);

for (let i = 0; i < N; i++) {
    let newArray = generateArray();
    console.log(newArray);
    printArray(newArray);
    console.log("stampo un array");
}




