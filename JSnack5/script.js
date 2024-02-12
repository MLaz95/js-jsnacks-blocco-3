// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro
// e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

const userInput = 'nel mezzo del cammin di nostra vita';
const resultElement = document.querySelector('#result');




// --- FUNCTION ---
function capitilize (string){
    const words = string.split(' ');
    let output = [];

    for(i = 0; i < words.length; i++){
        output.push(words[i][0].toUpperCase() + words[i].slice(1))
    }

    return output.join(' ');
}
