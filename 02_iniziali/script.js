/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function restituisciIniziali(namesArray) {
  const inizialiArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    inizialiArray.push(namesArray[i][0]);
  }
return inizialiArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(restituisciIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


