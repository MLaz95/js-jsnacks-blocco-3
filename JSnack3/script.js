// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri
// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).+
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra 'a' e 'b'

const minElement = document.querySelector('#min');
const maxElement = document.querySelector('#max');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

// generates array with a 100 numbers
let array100 = [];
console.log('test');

for(i = 0; i <= 100; i++){
    array100.push(i);
}

// prints the range between two provide values within the array100
buttonElement.addEventListener('click', function(){
    const minValue = Number(minElement.value);
    const maxValue = Number(maxElement.value);

    if(minValue > maxValue || minValue < 0 || maxValue < 0 || minValue > 100 || maxValue > 100){
        resultElement.innerHTML = "Provided values are incorrect. Make sure to input values between 0 and 100"
    } else {
        resultElement.innerHTML = getRange(array100, minValue, maxValue);        
    }
})

// --- FUNCTION ---
// returns all elements of an array included between two provided values
function getRange (array, min, max){
    let range = [];
    for(i = min; i <= max; i++){
        range.push(array[i]);
    }
    console.log(range)
    return range;
}