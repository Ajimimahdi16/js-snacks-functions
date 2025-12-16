/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraIniziali(namesArray, letter) {
  const filteredNames = [];
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i][0].toLowerCase() === letter.toLowerCase()) {
      filteredNames.push(namesArray[i]);
    }
  }
  return filteredNames;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filtraIniziali(names, 'A'));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]