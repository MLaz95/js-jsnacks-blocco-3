// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento
// e la restituisca girata (es. "Ciao" -> "oaiC")

function invert (word){
    let backWord = "";
    for(i = word.length - 1; i >= 0; i--){
        backWord += word[i];
        
    }
    return backWord;
}

console.log(invert('test'))