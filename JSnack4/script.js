// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro
// e restituisca la stringa con i caratteri ordinati alfabeticamente

const userInput = 'test';

console.log(alphabetize(userInput))


// --- FUNCTION ---
function alphabetize (word){
    let wordArray = [];
    for(i = 0; i < word.length; i++){
        wordArray.push(word[i]);
    }
    return wordArray.sort();
};