// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri
// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).+
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'


function getRange (array, min, max){
    let range = [];
    for(i = min; i <= max; i++){
        range.push(array[i]);
    }
    return range;
}
const arrayNumbers = [0, 1, 2, 3, 4, 5]
console.log(getRange(arrayNumbers, 2, 4))