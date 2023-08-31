
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



//loops
// i++ = -> i = i + 1 serve ad evitare un loop infinito
//stampare tutti i numeri da 0 a 1000

/*for (let i = 0; i <= 1000; i++) {
    const prova = document.getElementById('prova');
    prova.insertAdjacentHTML("beforeend", `<li>${i}</li>`)
    console.log(i);
}*/



// stampo in console i numeri da 1000 a 0

/*let element = document.getElementById('list');

for(let i = 1000; i >= 100; i--) {
    console.log(i);

    const markup = `<li>${i}</li>`;

    //element.innerHTML += markup;
    const liElement = document.createElement('li')
    liElement.append(i);
    element.append(liElement);
}
*/



/*const listEl = document.getElementById('list')

for(let i = 25; i <= 50; i++){
    
    console.log(i);

    const itemEl = `<li>${i}</li>`

    //listEl.innerHTML = itemEl

    listEl.insertAdjacentHTML("beforeend", itemEl);

}
*/



/*
const listElement = document.getElementById('list');

for(let i = 75; i >= 50; i--){
    console.log(i);
    const itemElement = document.createElement("li")
    itemElement.append(i);
    listElement.append(itemElement);
}
*/



// Array live_js

/*

const TVseries = ['supernatural', 'breaking bad', 'the boys'];

console.log(TVseries);

TVseries.push('stranger things');

TVseries.push('the mandalorian');

console.log(TVseries.length);

let userNumber = prompt(`Choose a number between 0 and ${TVseries.length - 1}`);

console.log(userNumber);

TVseries[userNumber];

console.log(TVseries[userNumber]);

*/



/*

const shoppingList = ['pasta', 'pomodoro', 'olio'];

console.log(shoppingList);

const ulElement = document.querySelector('ul');

for (let i = 0; i < shoppingList.length; i++) {

    const element = shoppingList[i];
    
    console.log(element);

    const markup = `<li>${element}</li>`

    ulElement.innerHTML += markup

}

*/



// dato un array di numeri interi, stampare solo i numeri dispari

/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    
    const element = numbers[i];

    if(element % 2 !== 0){
        console.log(element);
    }

}

*/



// stampare tutti gli elementi di un array dentro una lista ordinata

/*

const animals = ['leone', 'zebra', 'elefante'];

console.log(animals);

const olElement = document.querySelector('ol');

for (let i = 0; i < animals.length; i++) {
    
    const animal = animals[i];

    console.log(animal);

    const liElement = document.createElement('li');
    
    liElement.append(animal);

    console.log(liElement);
    
    olElement.append(liElement);

}

*/



/*

const footballTeams = ['roma','lazio','milan','inter']

console.log(footballTeams);

const listElement = document.querySelector('ul');

for (let i = 0; i < footballTeams.length; i++) {
    
    const team = footballTeams[i];

    console.log(team);

    const listItem = `<li>${team}</li>`

    listElement.insertAdjacentHTML('beforeend', listItem);
    
}

*/



/*

const movies = ['']

movies.push('matrix')
movies.push('avatar')
movies.push('lion king')
movies.push('imitation game')
movies.push('harry potter')
movies.push('star wars')

//console.log(movies);

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// nodo della DOM 
const ul = document.querySelector('ul')

for (let index = 0; index < movies.length; index++) {
    
    const movie = movies[index];

    console.log(movie);
    
    const liMarkup = `<li>${movie}</li>`

    // 1 innerHTML 
    //ul.innerHTML += liMarkup

    // 2 insertAdjacentHTML/insertAdjacentElement
    //ul.insertAdjacentHTML('beforeend', liMarkup)


    // 3 createElement/append
    const liElement = document.createElement('li');

    liElement.setAttribute('class', 'li-Element')
    liElement.setAttribute('id', '')
    liElement.append(movie)

    ul.append(liElement);

    //console.log(liElement);

}

*/



// Funzioni js

/*const yob_2 = 1990;

const currentYear_2 = new Date().getFullYear()

console.log(yob_2, currentYear_2);

const userAge_2 = currentYear_2 - yob_2

console.log(userAge_2);


const yob_3 = 2000;

const currentYear_3 = new Date().getFullYear()

console.log(yob_3, currentYear_3);

const userAge_3 = currentYear_3 - yob_3

console.log(userAge_3);*/


/*function sommaNumeri(num1, num2) {

    console.log(num1);

    alert(num1 + num2);

}*/

//sommaNumeri(5, 9)



/*function calcAge(yearOfBirth) {

    console.log(yearOfBirth);

    const currentYear = new Date().getFullYear()
    
    console.log(yearOfBirth, currentYear);
    
    const userAge = currentYear - yearOfBirth
    
    console.log(userAge);

}

const userYob = Number(prompt('type your year of birth'));

calcAge(1980)

calcAge(userYob)*/



/*let num2 = 20;// variabile globale

function sommaNumeri(num1, num2) {

    const result = num1 + num2
    console.log(result);
    return result // inserire come ultima istruzione o contenuta in un condizionale

}

//console.log(result);

console.log(sommaNumeri(4, 5));//return (read) e loggo

5+5 //leggo ma non loggo
console.log(5+5); //leggo e loggo*/



/*const currentYear = new Date().getFullYear()

function calcAge(yearOfBirth, currentYear) {
    
    return currentYear - yearOfBirth;

}

calcAge(1980, currentYear)
calcAge(1980, new Date().getFullYear()) */



/*
numeri random: 
generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo


function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}*/

/*const randomNumber = getRndInteger(1, 10);

console.log(getRndInteger(1, 10));

console.log(randomNumber);*/

/*for (let i = 0; i < 10; i++) {
  
    const randomNumber = getRndInteger(1, 10); 
    console.log(randomNumber);
}*/



/*
pari o dispari: 
scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/

//const userNumber = 8;

/*if(userNumber % 2 === 0) {
    console.log("il numero è pari");
} else {
    console.log("il numero è dispari");
}*/



/*const userNumber = prompt("Scegli un numero");
console.log(isEven(userNumber));
const result = isEven(userNumber);
console.log(result);

if(isEven(userNumber)) {
    console.log("numero pari");
} else {
    console.log("numero dispari");
}*/

function isEven(userNumber) {

    if (userNumber % 2 === 0) {
    
        return true;
    
    }
    
    return false;

}

const esegui = document.querySelector('button');

const inputNumber = document.getElementById('user_number');

esegui.addEventListener('click', function () {
    
    console.log("Ho cliccato su esegui");
    
    console.log(inputNumber.value + " " + "Questo è il numero che ho scelto");
    
    if (isEven(inputNumber.value)) {
    
        console.log("Il numero è pari");
    
    } else {
    
        console.log("Il numero è dispari");
    
    }

})



















