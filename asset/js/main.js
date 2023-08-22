//Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/*

Strumenti.

- prompt
- let userAge
- consoleLog
- document.getElementById

*/

// Chiedere età utente

let userAge = prompt('type your age');

// recupero l'anno corrente con una const

const currentYear = 2023;

// sottraggo all'anno corrente gli anni dell'utente

const birthYear = currentYear - Number(userAge);

// stampo in console il risultato

console.log('ciao sei nato il ' + birthYear);
