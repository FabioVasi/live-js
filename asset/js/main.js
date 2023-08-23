/*

Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

Strumenti.

- prompt
- let userAge
- consoleLog
- document.getElementById

Chiedere età utente

let userAge = prompt('type your age');

recupero l'anno corrente con una const

const currentYear = 2023;

sottraggo all'anno corrente gli anni dell'utente

const birthYear = currentYear - Number(userAge);

stampo in console il risultato

console.log('ciao sei nato il ' + birthYear);

*/



/*

Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

Strumenti.

- prompt
- document.getElementById
- console.log

chiedere il nome utente

const userName = prompt('inserisci il tuo nome');

selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
console.log(greetingsElement);

stampare il risultato in console

console.log('Ciao' + userName);

 stampare il risultato in pagina

greetingsElement.innerHTML = 'Ciao ' + userName;

*/



/*

Es.s n°1 JS

Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23

Strumenti.

- prompt
- Let/const
- document.getElementById
- console.log
- 

const userName = prompt('type your name here');

const userSurname = prompt('type your surname here');

const favouriteColor = prompt('type your favourite color here');

console.log(userName, userSurname, favouriteColor);

const result = `${userName + userSurname + favouriteColor}23`;

console.log(result);

const passwordElement = document.getElementById('password');
console.log(passwordElement);

passwordElement.innerHTML = result;

*/



/*

Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

Strumenti.

- prompt
- length
- console.log
- if/else

*/

// chiedo parola 1

const parola_1 = prompt('inserisci parola 1');

// chiedo parola 2

const parola_2 = prompt('inserisci parola 2');

// console log parole

console.log(parola_1, parola_2, parola_1.length, parola_2.length);

// verifico se la parola 1 è più lunga di parola 2

if(parola_1.length > parola_2.length){
    console.log('la parola è più lunga');
} else if(parola_1.length < parola_2.length){
    console.log('la parola è più lunga');
} else{
    console.log('le parole sono uguali');
}

// verifico se la parola 2 è più lunga di parola 1
// verifico se la parola 1 è uguale alla  parola 2
// stampo il messaggio in console

