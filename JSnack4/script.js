// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro
// e restituisca la stringa con i caratteri ordinati alfabeticamente

const inputElement = document.querySelector('#word');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('#result');

buttonElement.addEventListener('click', function(){
    resultElement.innerHTML = alphabetize(inputElement.value);
})


// --- FUNCTION ---
function alphabetize (word){
    let wordArray = [];
    for(i = 0; i < word.length; i++){
        wordArray.push(word[i]);
    }
    return wordArray.sort();
};