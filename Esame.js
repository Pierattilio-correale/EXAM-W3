/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Pierattilio",
  surname: "Correale",
  age: 24,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "JAVA SCRIPT"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C++");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const randomNumber = Math.floor(Math.random() * 7);
  return randomNumber;
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
let whoIsBiggerN = whoIsBigger(10, 20);
console.log(whoIsBiggerN);

whoIsBiggerN = whoIsBigger(15, 7);
console.log(whoIsBiggerN);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str1) {
  const wordForThewArraySplited = str1.split(" ");

  const newArraySplit = [];

  for (let i = 0; i < wordForThewArraySplited.length; i++) {
    const changer = wordForThewArraySplited[i].slice(0);
    newArraySplit.push(changer);
  }

  return newArraySplit;
};
console.log(splitMe("I Love Coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str1, booleano) {
  if (booleano === true) {
    return str1.slice(1);
  } else if (booleano === false) {
    return str1.slice(0, -1);
  } else {
    console.log(
      "Mi dispiace non puoi assegnare ad un valore booleano un numero o una stringa!!"
    );
  }
};
console.log(deleteOne("Ciao", true));
console.log(deleteOne("Ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str1) {
  return str1.replace(/[0-9]/g, ""); // HO trovato questo metodo su internet che effettivamente funziona , lascio il link del sito :  https://salesforce.stackexchange.com/questions/265746/how-do-i-replace-all-non-digit-characters-in-a-regex-except-for-the-period
}; // elimina ogni numero presente nella stringa

console.log(onlyLetters(" 24334 ciao 3427"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str1) {
  let reg = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}$/g; // anche in questo caso per ottenere il risultato , ho cercato su internet su questo sito https://it.javascript.info/regexp-anchors#:~:text=Per%20trovare%20corrispondenza%20con%20un,w%2D%5D%7B2%2C20%7D%20.&text=Possiamo%20utilizzare%20entrambi%20gli%20ancoraggi,stringa%20segua%20uno%20specifico%20pattern.
  return reg.test(str1); // questa riga di codice ci prova che la stringa sia effettivamente uguale ad un email
};

console.log(isThisAnEmail("pierattiliocorreale@yahoo.it"));
console.log(isThisAnEmail("questa non è un email"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

//per completezza ho fatto entrambe le versioni in ogni caso la prima restituisce la data completa di oggi :
const now = new Date();

const whatDayIsIt = function () {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const dayNow = now.getDate();
  const dayCurrent = ` ${dayNow}/${month}/${year} `;
  return dayCurrent;
};
console.log(whatDayIsIt());

// la seconda restituisce il giorno corrente :
const whatDayIsItt = function () {
  const daysOfWeekendDynamic = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const dayNow = now.getDay();
  return daysOfWeekendDynamic[dayNow];
};
console.log(whatDayIsItt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (n1) {
  const newObjResult = {
    sum: 0,
    casualNumbers: [],
  };

  for (let i = 0; i < n1; i++) {
    const backFunction = dice();
    newObjResult.casualNumbers.push(backFunction);
    newObjResult.sum += backFunction;
  }

  return newObjResult;
};

console.log(rollTheDices(7));
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  const today = new Date();
  const diffSecond = today - new Date(date);
  const diffDays = diffSecond / (1000 * 3600 * 24); //serve per calcolare La differenza in millisecondi viene quindi divisa per (1000 * 60 * 60 * 24), che corrisponde a 86400000 millisecondi (ovvero il numero di millisecondi in un giorno) per ottenere il numero di giorni. // formula trovata su internet, sito : https://gabrieleromanato.com/2023/06/javascript-calcolare-la-differenza-in-giorni-tra-due-date
  return Math.floor(diffDays); // questo serve per arrotondare il valore
};

console.log(howManyDays("2025-01-01"));
console.log(howManyDays("2024-03-22")); // scrivendo la data al contrario porta un errore , cercando su internet ho trovato che in js le date sono scritte al contrario

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const dayNow = now.getDate();
  const monthNow = now.getMonth();

  const myBirthdayDay = 7; // se ci mettessi 21
  const myBirthdayMonth = 0; // se ci mettessi 1 tornerebbe tutto true!

  if (dayNow === myBirthdayDay && monthNow === myBirthdayMonth) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const myObj = {
  name: "Pierattilio",
  lastnaame: "Correale",
  job: "Epicoder-Student",
};
const deleteProp = function (obj, str1) {
  delete obj[str1]; // utilizzo la square  Brackets Notation
  return obj;
};
console.log(deleteProp(myObj, "name"));
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let newestMovie = movies[0];
  movies.forEach((movie) => {
    if (movie.Year > newestMovie.Year) {
      newestMovie = movie;
    }
  });

  console.log(newestMovie);
};
newestMovie();
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (moviesArray) {
  return moviesArray.length;
};
console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (moviesArray) {
  for (let i = 0; i < moviesArray.length; i++) {
    console.log(moviesArray[i].Year);
  }
};
onlyTheYears(movies);
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = movies.filter((movie) => {
  if (movie.Year < 2000) {
    return movie.Year;
  }
});
console.log(onlyInLastMillennium);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// NON SO PER QUALE MOTIVO MI PORTA RIGA 433 INCLUDES IS NOT DEFINED

const searchByTitle = function (str1) {
  const titlePushed = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str1)) {
      titlePushed.push(movies[i]);
    }
  }
  return titlePushed;
};

console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (str1) {};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (n1) {
  movies.splice(n1, 1);
  return movies;
};

console.log(removeIndex(2));
console.log(removeIndex(7));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const myDom = function () {
  const searchId = document.getElementById("container");
  console.log(searchId); //chiaramente in console vedrò null perchè non c'è nessun id container ma se avessi avuto <h1 id"container> per esempio avrei avuto l'id di questo elemento
};
myDom();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const myDom2 = function () {
  const searchAllTd = document.getElementsByTagName("td");
  console.log(searchAllTd);
};
myDom2();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const myDom3 = function () {
  const allThetd = document.getElementsByTagName("td");
  for (let i = 0; i < allThetd.length; i++) {
    console.log(allThetd[i].innerText);
  }
};
myDom3();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const myDom4 = function () {
  const allAnchor = document.getElementsByTagName("a");
  for (let i = 0; i < allAnchor.length; i++) {
    allAnchor[i].style.backgroundColor = "red";
  }
};
myDom4();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const myDom5 = function () {
  const myUnorderedList = document.getElementById("myList");
  const newli = document.createElement("li");
  myUnorderedList.appendChild(newli);
};
myDom5();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const myDom6 = function () {
  const myUnorderedList = document.getElementById("myList");
  myUnorderedList.innerText = "";
};
myDom6();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const myDom7 = function () {
  const allMyTr = document.getElementsByTagName("tr");
  for (let i = 0; i < allMyTr.length; i++) {
    allMyTr[i].classList.add("test");
  }
};
myDom7();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (n1) {
  if (n1 < 2) return false;

  for (let i = 2; i < n1; i++) {
    if (n1 % i === 0) {
      return false;
    }
  }

  return true;
};
const tryMyNumber = isItPrime(6);
console.log(tryMyNumber);
const tryMyNumber2 = isItPrime(7);
console.log(tryMyNumber2);
/* Questo array viene usato per gli esercizi. Non modificarlo. */
