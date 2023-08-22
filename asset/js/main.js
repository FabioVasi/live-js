//Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/*

Strumenti.

- prompt
- let userAge
- consoleLog
- document.getElementById

*/

// Chiedere età utente

//let userAge = prompt('type your age');

// recupero l'anno corrente con una const

//const currentYear = 2023;

// sottraggo all'anno corrente gli anni dell'utente

//const birthYear = currentYear - Number(userAge);

// stampo in console il risultato

//console.log('ciao sei nato il ' + birthYear);



//Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

//Strumenti.

/*

- prompt
- document.getElementById
- console.log

*/

//chiedere il nome utente

const userName = prompt('inserisci il tuo nome');

//selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
console.log(greetingsElement);

//stampare il risultato in console

console.log('Ciao' + userName);

// stampare il risultato in pagina

greetingsElement.innerHTML = 'Ciao ' + userName;
