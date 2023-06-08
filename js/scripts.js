// Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const numbersArray = numbers => {
  const randomPosition = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(randomPosition);
};
numbersArray([1, 2, 3, 4, 5]);

// Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

//   - "La suma de todos los números es:[suma]"
//   - "La media de todos los números es:[media]"
//   - "El mayor es [mayor] y el menor es [menor]"

const operationNumbers = numbers => {
  const sumOperation = numbers[0] + numbers[1] + numbers[2];
  console.log('La suma de todos los números es ' + sumOperation);
  const averageOperation = sumOperation / 3;
  console.log('La media de todos los números es ' + averageOperation);
  const greatestOperation = Math.max(numbers[0], numbers[1], numbers[2]);
  const minorOperation = Math.min(numbers[0], numbers[1], numbers[2]);
  console.log(
    'El mayor es ' + greatestOperation + ' y el menor es ' + minorOperation
  );
};

operationNumbers([1, 2, 3]);

// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const aleatoryNumbers = numbers => {
  const aleatory = Math.floor(Math.random() * 11);
  console.log(aleatory);
  if (numbers.includes(aleatory)) {
    console.log(
      'Contiene ese número y es la posición ' + numbers.indexOf(aleatory)
    );
  } else {
    console.log('No contiene ese número');
  }
};

aleatoryNumbers([1, 2, 3, 4, 5]);

// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const emptyArray = numbers => {
  const randomNumber = Math.floor(Math.random() * 101);
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  console.log(randomNumber);
  numbers.push(randomNumber, randomNumber1, randomNumber2);
  console.log(numbers);
};

emptyArray([]);

// Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenOddArrays = numbers => {
  const evenArrays = [];
  const oddArrays = [];
  const randomNumber = numbers[0] * Math.floor(Math.random() * 11);
  const randomNumber1 = numbers[1] * Math.floor(Math.random() * 11);
  const randomNumber2 = numbers[2] * Math.floor(Math.random() * 11);
  const randomNumber3 = numbers[3] * Math.floor(Math.random() * 11);
  const randomNumber4 = numbers[4] * Math.floor(Math.random() * 11);

  if (randomNumber % 2 === 0) {
    evenArrays.push(randomNumber);
  } else {
    oddArrays.push(randomNumber);
  }
  if (randomNumber1 % 2 === 0) {
    evenArrays.push(randomNumber1);
  } else {
    oddArrays.push(randomNumber1);
  }
  if (randomNumber2 % 2 === 0) {
    evenArrays.push(randomNumber2);
  } else {
    oddArrays.push(randomNumber2);
  }
  if (randomNumber3 % 2 === 0) {
    evenArrays.push(randomNumber3);
  } else {
    oddArrays.push(randomNumber3);
  }
  if (randomNumber4 % 2 === 0) {
    evenArrays.push(randomNumber4);
  } else {
    oddArrays.push(randomNumber4);
  }
  console.log(numbers, evenArrays, oddArrays);
};

evenOddArrays([1, 2, 3, 4, 5]);

// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = dniNumber => {
  const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const solutionLetterDni = dniNumber % 23;
  console.log(dniNumber + letters[solutionLetterDni]);
};

dniLetter(20881234);

// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const wordsArray = word => {
  const firstLetter = word[0].charAt(0).toUpperCase();
  const lastLetter = word[0].charAt(word[0].length - 1).toUpperCase();
  const firstLetter1 = word[1].charAt(0).toUpperCase();
  const lastLetter1 = word[1].charAt(word[1].length - 1).toUpperCase();
  const firstLetter2 = word[2].charAt(0).toUpperCase();
  const lastLetter2 = word[2].charAt(word[2].length - 1).toUpperCase();

  const solutionLetters = [];
  solutionLetters.push(
    firstLetter,
    lastLetter,
    firstLetter1,
    lastLetter1,
    firstLetter2,
    lastLetter2
  );
  console.log(solutionLetters);
};

wordsArray(['hola', 'adios', 'gato']);
