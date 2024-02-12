// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro
// e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

const userInput = 'nel mezzo del cammin di nostra vita';
const words = userInput.split(' ');

console.log(words)
let output = [];
for(i = 0; i < words.length; i++){
    output.push(words[i][0].toUpperCase() + words[i].slice(1))
}

console.log(output.join(' '))