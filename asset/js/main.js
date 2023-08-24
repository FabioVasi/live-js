
//Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/*

Strumenti.

- prompt
- let userAge
- consoleLog
- document.getElementById

// Chiedere età utente

let userAge = prompt('type your age');

// recupero l'anno corrente con una const

const currentYear = 2023;

// sottraggo all'anno corrente gli anni dell'utente

const birthYear = currentYear - Number(userAge);

// stampo in console il risultato

console.log('ciao sei nato il ' + birthYear);

*/



//Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

/*

Strumenti.

- prompt
- document.getElementById
- console.log

// chiedere il nome utente

const userName = prompt('inserisci il tuo nome');

// selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
console.log(greetingsElement);

// stampare il risultato in console

console.log('Ciao' + userName);

// stampare il risultato in pagina

greetingsElement.innerHTML = 'Ciao ' + userName;

*/



//Es.s n°1 JS

//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
//che va formattato in questo modo: nomecognomecolorepreferito23

/*

Strumenti.

- prompt
- Let/const
- document.getElementById
- console.log

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

// chiedo parola 1

const parola_1 = prompt('inserisci parola 1');

// chiedo parola 2

const parola_2 = prompt('inserisci parola 2');

// console log parole

console.log(parola_1, parola_2, parola_1.length, parola_2.length);

// verifico se la parola 1 è più lunga di parola 2
// verifico se la parola 2 è più lunga di parola 1
// verifico se la parola 1 è uguale alla  parola 2
// stampo il messaggio in console

if(parola_1.length > parola_2.length){
    console.log('la parola è più lunga');
} else if(parola_1.length < parola_2.length){
    console.log('la parola è più lunga');
} else{
    console.log('le parole sono uguali');
}

*/



//età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

/* 

Strumenti.

- prompt
- condition
- number
- console.log
- getElementById

*/

/*

// chiedo gli anni del primo utente e li trasformo in numeri

const età_1 = Number(prompt('quanti anni hai?'));

// chiedo gli anni del secondo utente e li trasformo in numeri

const età_2 = Number(prompt('quanti anni hai?'));
console.log(età_1, età_2);

// 1 confronto se l'età del primo utente è superione a quella del secondo utente e stampo il messaggio
// 2 confronto se l'età del primo utente è inferiore a quella del secondo utente e stampo il messaggio
// 3 confronto se l'età del primo utente è uguale a quella del secondo utente e stampo il messaggio

*/

/*

if(età_1 > età_2){
    console.log('utente 1 è più grande di utente 2');
} else if(età_1 < età_2){
    console.log('utente 2 è più grande di utente 1');
} else if(età_1 === età_2){
    console.log('hanno la stessa età');
} else{
    alert("ops! c'è un errore.");
}
console.log(isNaN());

*/



// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

/*

Strumenti.

- prompt
- number
- Math.random
- Math.floor
- Math.ceil
- const
- let
- if
- else
- console log

*/

/*

// prompt pari o dispari

const sceltaUtente = prompt('pari o dispari?');

// to do.. controlla se l'utente ha inserito i dati richiesti

if(sceltaUtente != 'pari' && sceltaUtente != 'dispari'){
    alert('inserisci pari o dispari');
}

// prompt per il numero da 1 a 9

const numeroUtente = prompt('scegli un numero da 1 a 9');

// to do.. controlla se l'utente ha inserito i dati richiesti

if(numeroUtente < 1 || numeroUtente > 9){
    alert('hai inserito un numero troppo alto o troppo basso');
}

console.log(sceltaUtente, numeroUtente);

// genero il numero random per il computer

const numeroComputer = Math.floor(Math.random() * 9) + 1;
console.log(numeroComputer);

// sommo il risultato dei due numeri

const sommaNumeri = numeroComputer + numeroUtente;
console.log(sommaNumeri);

// verifica se pari o dispari dividento per 2

let risultato;

if(sommaNumeri % 2 == 0){
    console.log('pari');
    risultato = 'pari';
} else{
    console.log('dispari');
    risultato = 'dispari';
}
console.log(risultato);

// stabilisco chi vince

if(risultato === sceltaUtente){
    console.log('Hai vinto');
} else{
    console.log('Hai perso');
}

*/



//linkElement.className = linkElement.className + 'fabio';
































/*
Ciao Visitatore!
Imposta il nome di colore rosso in vari modi:
Solo con HTML+CSS
Scrivendo su element.style
Aggiungendo la classe con JS
*/

// Strumenti.

/*

const domTitle = document.querySelector("h1");

console.log(domTitle);

domTitle.style.color = "blue"

domTitle.classList.add("violet")

*/



//Al click di un pulsante, deve apparire un alert con un numero random

/*

const domButton = document.querySelector("button");

console.log(domButton);

domButton.addEventListener('click', function(){
    alert(Math.random())
});

*/



/*
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito
*/

// strumenti.

/*

- prompt
- console.log
- getElementById/querrySelector
- const/let
- if/else
- .classList/.className

*/

/*

// Chiedo il nome dell'utente
const userName = prompt('Type your name').toLowerCase()
// Chiedo il sesso dell'utente
const userGender = prompt('Type your gender. ie:m/f/x')
console.log(userName, userGender);
// Stampo in pagina Ciao "nome"
document.querySelector('h1').innerHTML = 'Ciao ' + `<span>${userName}</span>`;

const nameElementDom = document.querySelector('h1 > span')

if (userGender === 'm') {
    nameElementDom.style.color = 'blue';
} else if(userGender === 'f') {
    nameElementDom.style.color = 'pink';
} else if(userGender === 'x') {
    nameElementDom.style.color = 'green';
} else {
    alert('options are m/f/x try again');
}

*/
