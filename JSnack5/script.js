// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro
// e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

const userInput = document.querySelector('#user-input');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

buttonElement.addEventListener('click', function(){
    resultElement.innerHTML = capitilize(userInput.value);
})


// --- FUNCTION ---
function capitilize (string){
    // splits sentence into a new array wherever it finds a space
    const words = string.split(' ');
    let output = [];

    // for each word it capitilizes the first letter, adds the rest of the word
    // and pushes the whole thing into a new array
    for(i = 0; i < words.length; i++){
        output.push(words[i][0].toUpperCase() + words[i].slice(1))
    }

    // joins together each word of the new array leaving a space in between
    return output.join(' ');
}
