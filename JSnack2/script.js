// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri
// (date per scontato che abbiano lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro

const arrayLetters = ['a', 'b', 'c', 'd', 'e'];
const arrayNumbers = [1, 2, 3, 4, 5];

console.log(arrayLetters)
console.log(arrayNumbers)

let mix = [];
for (i = 0; i < arrayLetters.length; i++){
    mix.push(arrayLetters[i], arrayNumbers[i])
}

console.log(mix)


