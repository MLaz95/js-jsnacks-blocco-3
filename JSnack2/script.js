// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri
// (date per scontato che abbiano lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro

// memorizes html elements
const firstDataElement = document.querySelector('#groupA');
const secondDataElement = document.querySelector('#groupB');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

// two arrays of equal length
const arrayLetters = ['a', 'b', 'c', 'd', 'e'];
const arrayNumbers = [1, 2, 3, 4, 5];

firstDataElement.innerHTML = arrayLetters;
secondDataElement.innerHTML = arrayNumbers;

buttonElement.addEventListener('click', function(){
    resultElement.innerHTML = meld(arrayLetters, arrayNumbers);
    resultElement.classList.remove('d-none');
})

// --- FUNCTION ---
// populates new array with elements of given parameters
function meld (arrayA, arrayB){
    let mix = [];
    for (i = 0; i < arrayA.length; i++){
        mix.push(arrayA[i], arrayB[i])
    }
    return mix;
}



