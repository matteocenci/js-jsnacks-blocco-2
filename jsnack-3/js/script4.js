// Creo un array 

let arrayPrimo = [];

for (let i = 0; i < 10; i++){
    let numero = parseInt(prompt('Dammi un numero: '))

    console.log(numero);
    arrayPrimo.push(numero);
    
    
}
console.log(arrayPrimo);
let numeroElem = contaElementi(arrayPrimo);

console.log("La lunghezza della lista è: " + numeroElem);