// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri
// (date per scontato che abbiano lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro

const arrayLetters = ['a', 'b', 'c', 'd', 'e'];
const arrayNumbers = [1, 2, 3, 4, 5];
const resultElement = document.querySelector('#result');

resultElement.innerHTML = meld(arrayLetters, arrayNumbers)




// --- FUNCTION ---
function meld (arrayA, arrayB){
    let mix = [];
    for (i = 0; i < arrayA.length; i++){
        mix.push(arrayA[i], arrayB[i])
    }
    return mix;
}



