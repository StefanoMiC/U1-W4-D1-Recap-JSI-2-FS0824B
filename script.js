// _________________________________________ FUNZIONI _________________________________________
// blocco di codice delimiatato da graffe, che può essere utilizzato più volte
// può essere usato per ritardare l'esecuzione di un dato codice
// va invocato per poter essere eseguito
// può avere input e output
// può dare risultati diversi a seconda di input diversi

// DEFINIZIONE di funzione (non è ancora invocata!!!)
const sayMyNameAgain = function () {
  console.log("Mufasa");
};

function sayMyName() {
  console.log("Heisenberg");
  sayMyNameAgain();
}

// INVOCAZIONE DI FUNZIONE (il codice si esegue effettivamente solo a riga 14)
sayMyName();

// OUTPUT DELLA FUNZIONE
const giveMeRandom = function () {
  const number = Math.floor(Math.random() * 11);
  return number;

  console.log("non mi vedrai mai...");
};

const result = giveMeRandom();
console.log("result", result);

const drawNumbers = function (limit) {
  const arrOfNums = [];

  for (let i = 0; i < limit; i++) {
    arrOfNums.push(giveMeRandom());
  }
  // il for loop è una struttura bloccante, il return non potrà avvenire fino a che il ciclo non sarà terminato

  return arrOfNums;
};

console.log(drawNumbers(2));
console.log(drawNumbers(5));
console.log(drawNumbers(10));
console.log(drawNumbers(25));
console.log(drawNumbers(100));

const divideAndConquer = () => {
  const arrToEvaluate = drawNumbers(20); // [2, 3, 5, 10, 9, 8, 2, 5]
  console.log("all the numbers", arrToEvaluate);

  const organized = {
    lessThanFive: [],
    overOrEqualFive: []
  };

  //   for (let i = 0; i < arrToEvaluate.length; i++) {
  //     const number = arrToEvaluate[i];

  //     if (number < 5) {
  //       console.log("number < 5:", number);
  //       organized.lessThanFive.push(number);
  //     } else {
  //       console.log("number >= 5:", number);
  //       organized.overOrEqualFive.push(number);
  //     }
  //   }
  // _________________________________________ forEach _________________________________________
  // forEach() - cicla solamente, e ci dà accesso al singolo elemento ciclato
  arrToEvaluate.forEach(num => {
    if (num < 5) {
      console.log("number < 5:", num);
      organized.lessThanFive.push(num);
    } else if (num >= 5) {
      console.log("number >= 5:", num);
      organized.overOrEqualFive.push(num);
    }
  });

  return organized;
};

console.log(divideAndConquer());

const initialArrOfNums = drawNumbers(25);
console.log("initial arr of nums", initialArrOfNums);
// _________________________________________ map() _________________________________________
// map() - serve a TRASFORMARE una collezione di elementi, in un'altra collezione con elementi modificati.
// lo fa senza modificare l'array di partenza, perché CREA UN NUOVO ARRAY dello stesso numero di elementi di quello di partenza

const multipliedByTen = initialArrOfNums.map(num => num * 10);
console.log("multiplied by ten", multipliedByTen);

const listItemsFromNum = initialArrOfNums.map(num => `<li>${num}</li>`);
console.log("list item from number", listItemsFromNum);

// document.body.innerHTML += listItemsFromNum.join("");

// _________________________________________ filter() _________________________________________
// filter() - serve a scremare dei valori secondo una CONDIZIONE, vuole vedersi tornare TRUE o FALSE dalla funzione, e RITORNA UN NUOVO ARRAY,
// potenzialmente con meno elementi, o addirittura vuoto (se nessuno corrisponde alla condizione)

// const onlyGreaterThanFive = initialArrOfNums.filter(num => {
//   if (num > 5) {
//     console.log("num", num, "è maggiore di 5");
//     return true;
//   } else {
//     console.log("num", num, "non era maggiore di 5");
//     return false;
//   }
// });

const onlyLessThanFive = initialArrOfNums.filter(num => num <= 5);
console.log("only smaller than five", onlyLessThanFive);
const onlyGreaterThanFive = initialArrOfNums.filter(num => num > 5);
console.log("only greater than five", onlyGreaterThanFive);

const divideAndConquerFilter = () => {
  const arrToEvaluate = drawNumbers(20); // [2, 3, 5, 10, 9, 8, 2, 5]
  return { lessThanFive: arrToEvaluate.filter(num => num <= 5), overOrEqualFive: arrToEvaluate.filter(num => num > 5) };
};

console.log(divideAndConquerFilter());

// _________________________________________ reduce() _________________________________________
console.log("initial arr of nums", initialArrOfNums);

const reduceResult = initialArrOfNums.reduce((accumulator, currentElement) => {
  console.log("ACC", accumulator);
  console.log("CUR", currentElement);
  return accumulator + currentElement;
}, 0);

const reduceResult2 = initialArrOfNums.reduce((acc, curr) => acc + curr);
console.log(reduceResult2);

const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

const massSummed = starWarsCharacters.reduce((acc, curr) => {
  console.log("ACC", acc);
  console.log("CUR", curr);
  return acc + parseInt(curr.mass);
}, 0);

console.log(massSummed);
