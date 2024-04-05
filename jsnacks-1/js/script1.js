// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

let N = parseInt(prompt("Dammi un numero: "));
console.log(N);

let nArray = [""];

for (let i = 0; i < 10; i++) {
    let casualNumber = Math.floor(Math.random(i) * 100);
    console.log(casualNumber);

    nArray = N;

    nArray.push(casualNumber);
    console.log(nArray);
}