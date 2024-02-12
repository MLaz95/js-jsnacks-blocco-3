// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento
// e la restituisca girata (es. "Ciao" -> "oaiC")

// memorizes needed html elements
const inputElement = document.querySelector('#word');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

// executes function on button click
buttonElement.addEventListener('click', function(){
    resultElement.innerHTML = invert(inputElement.value);
})

// --- FUNCTION ---
function invert (word){
    let backWord = "";
    for(i = word.length - 1; i >= 0; i--){
        backWord += word[i];
    }
    return backWord;
}