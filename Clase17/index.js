//============================ DISTINTAS FORMAS DE HACER FUNCIONES
// - DECLARADA O NAMED FUNCTION
function esPar(n) {
  return n % 2 === 0;
}
//- FUNCTION EXPRESSION - son funciones puras
const esPar2 = function (n) {
  return n % 2 === 0;
};
// - ARROW
// Es mejor const porque to no quiero que cambie el valor en memoria
const esPar3 = (n) => n % 2 === 0;

// console.log(esPar3(2));

//================================= DIFERENCIAS ENTRE TIPOS DE FOR

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.numero = 10;
//.. FOREACH (ES MEJOR PORQUE DICE EL VALOR Y LA POCISIÓN, PODEMOS HACERLO EN UNA SOLA LINEA, SE ENTIENDE MÁS - no podemos usar continue y break) FOREACH no permite almacenar los valores en una nueva variable, para ello esta .map
// numeros.forEach((value, index) => console.log(value, index));

//.. Tambien hacemos lo mismo con un FOR (MÁS CÓDIGO Y MENOS LEGIBLE- podemos usar continue y break)
for (let index = 0; index < numeros.length; index++) {
  // console.log(numeros[index]);
}
//.. Tambien podemos hacer un FOR IN (la sintaxis es limpia, se puede usar continue y break, pero incluye aquellos valores agregados que no están en el array)
for (const index in numeros) {
  // console.log(numeros[index], index);
}

//.. Tambien lo podemos hacer por un for of porque un array es iterable (NO DICE LA POCISIÓN) - podemos usar continue y break
for (const n of numeros) {
  // console.log(n);
}

//PRACTICAS CON FOR EACH

//ForEach para sacar numeros PARES

numeros.forEach((value) => {
  if (value % 2 === 0) {
    // console.log(value);
  }
});

//Cambiamos un for of de clases anteriores por un forEach

const ARRAYDEALUMNOS = [
  {
    nombre: "Nicolas",
    apellido: "apellido de Nicolás",
    materias: ["algebra", "analisis matemático", "química", "física"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: false,
  },
  {
    nombre: "Vanina",
    apellido: "apellido de Vanina",
    materias: ["ingles", "programacion1", "economia"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: false,
  },
  {
    nombre: "María",
    apellido: "apellido de Maria",
    materias: ["historia", "lengua", "geografia"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: true,
  },
];

ARRAYDEALUMNOS.forEach((objeto) => {
  let recursa = objeto.recursa
    ? "recursa materias y llamar al " + objeto.tel.celular
    : "no recursa materias";
  // console.log(`El alumno: ${objeto.nombre}, ${recursa}`);
});

//==================================== MÁS MÉTODOS

//.......... MAP
//Paradigma de programación funcional, mapea, a diferencia del foreach crea un nuevo array con el resultado de las operaciones definidas, pero no modifica el anterior.
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dobles = numeros2.map((numero) => {
  return numero * 2;
});
//si quisieramos hacer esto en un for each deberiamos hacer una lista vacia y por cada iteración hacer un push a ese array

// console.log(numeros2);
// console.log(dobles);

//map sobre array de objetos
let numObj = numeros2.map((n) => {
  return {
    //Creo un array (porque map me da un array) que tenga como retorno un objeto con una key numero, cuyo value sea n y una key par cuyo value sea un bool indicando si es par o no
    numero: n,
    esPar: n % 2 === 0,
  };
});

// console.log(numeros2);
// console.log(numObj);

//Otro ejemplo: el array de alumnos devuelve de la base de datos un monton de cosas y solamente necesito el nombre y apellido

let nombresAlumnos = ARRAYDEALUMNOS.map((alumno) => {
  // return `${alumno.nombre} ${alumno.apellido}`;
  return { alumno: alumno.nombre, apellido: alumno.apellido };
});
// console.log(nombresAlumnos);

//.......... FIND
//Find devuelve el primer valor que encuentra que satisface la lógica que le pasamos
//-- Find en un array
let books = [
  "El hobbit",
  "Narnia",
  "Harry Potter",
  "El señor de los anillos",
  "Yo robot",
];
//Si encuentra el libro que incluye "El", va a mostrar el primero que encuentra con "El"
let book = books.find((book) => {
  return book.includes("El"); //PARA ESTO NO SIRVE PORQUE SOLAMENTE NOS DA EL PRIMER LIBRO QUE ENCUENTRA. NO TODOS.
});
// console.log(book);
//-- Find en un array con objetos
let book2 = [
  { id: 123, titulo: "El hobbit" },
  { id: 1234, titulo: "Narnia" },
  { id: 12345, titulo: "Harry Potter" },
  { id: 123456, titulo: "El señor de los anillos" },
  { id: 1234567, titulo: "Yo robot" },
];
let idBook = 123456; //El usuario me pasa una ID específica y yo lo tengo que buscar
let idBookEncontrado = book2.find((book) => {
  return book.id === idBook;
});
// console.log(idBookEncontrado);

//.......... FILTER

//Nos devuelve un array con el/los elementos que cumplan con la lógica, a diferencia del FIND este si nos puede devolver a TODOS los elementos

let book3 = [
  {
    id: 123,
    titulo: "El hobbit",
    author: "J.R.R Tolkien",
    genero: ["Ciencia ficcion", "aventura"],
  },
  {
    id: 1234,
    titulo: "Narnia",
    author: "C.S Lewis",
    genero: ["Ciencia ficcion", "aventura"],
  },
  {
    id: 12345,
    titulo: "Harry Potter",
    author: "J.K. Rowling",
    genero: ["Ciencia ficcion", "aventura"],
  },
  {
    id: 123456,
    titulo: "El señor de los anillos",
    author: "J.R.R Tolkien",
    genero: ["Ciencia ficcion", "aventura"],
  },
  {
    id: 1234567,
    titulo: "Yo robot",
    author: "Isaac Asimov",
    genero: ["Ciencia ficcion", "aventura"],
  },
  {
    id: 12345678,
    titulo: "El ultimo teorema de Ferma",
    author: "Simon Singh",
    genero: ["Ciencia", "Matemática", "Divulgación científica"],
  },
  {
    id: 123456789,
    titulo: "La puerta equivocada",
    author: "Adrian Paenza",
    genero: ["Ciencia", "Matemática", "Divulgación científica"],
  },
  {
    id: 12345678910,
    titulo: "Historia del tiempo",
    author: "Stephen Hawking",
    genero: ["Ciencia", "Física", "Divulgación científica"],
  },
];

//EL autor ingresa esto
let autor = "Adrian Paenza";
let genero = "Ciencia";

let librosFiltrados = book3.filter((book) => {
  cond1 = book.author === autor;
  cond2 = book.genero.includes(genero);
  return cond1 && cond2;
});
book;
// console.log(librosFiltrados);

//Hacer lo de arriba más dinámico
let autor2 = "J.R.R Tolkien";
let genero2 = "Ciencia";

const getBook = (selected, input, arr) => {
  //id, titulo y author se obtienen de la misma manera, pero generos tiene un array, por eso necesitamos utilizar una lógica.
  //Para todas las propiedades que no son generos hacer tal cosa y para genero tal otra
  if (selected !== "genero") {
    return arr.filter((book) => {
      return book[selected] === input;
    });
  } else {
    return arr.filter((book) => {
      return book[selected].includes(input);
    });
  }
};

//¿Por qué queremos filtrar? Por autor, ¿Porqué nombre? el que dice autor2, ¿De qué array? de book3
let searchBooks = getBook("author", autor2, book3); // let searchBooks = ("genero", genero2, book3);
// console.log(searchBooks);
//Si no encuentra indica que no hay resultados
if (searchBooks.length == 0) {
  // console.log("[searchBooks]", "No hay resultados");
} else {
  // console.log("[searchBooks]", searchBooks);
}

//.......... SOME - Devuelve true si al menos uno cumple la condicion
let arraysNums = [1, 3, 5, 7, 8, 9];

// console.log(arraysNums.some((n) => n % 2 == 1));

//.......... EVERY - Devuelve true si todos cumplen la condicion
// console.log(arraysNums.every((n) => n % 2 == 1));

//Some y every no son tan utiles porque indican si se cumple o no la condición pero no dice cuales no cumplen y cuales si por ejemplo, un map o un filter pueden hacer lo mismo y si lo devuelven

//.......... SORT - Ordena(ej de mayor a manor) los valores del array, sort convierte todo en string (eso es malo)
let arraysNums2 = [11.99, 77.88, 8, 1, 99.99, 9];
// console.log(arraysNums2.sort()); // sort convierte todo a string y ordena de menor a mayor, pero solo evalúa el primer dígito, esto solo pasa con números, con strings funciona bien

//sort ascendente
// hace A - B, si la resta da negativo ordena A antes que B, si da positivo ordena B antes que A

// console.log(arraysNums2.sort((a, b) => a - b)); //cuando usamos numeros tenemos que pasarle una funcion anónima para ordenarlos

//sort descendente

// console.log(arraysNums2.sort((a, b) => b - a));

//.......... REDUCE - Toma los valores de un array y lo reduce a un solo valor

let arraysNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = arraysNum3.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
});
console.log(resultado);

//con Objetos
let numObj2 = [
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
  { value: 10 },
];
//FORMA 1
let resultado2 = numObj2.reduce(
  (acumulador, valorActual) => {
    acumulador["value"] = acumulador.value + valorActual.value;
    return acumulador;
  },
  { value: 0 }
);

console.log(resultado2);

//FORMA2
let resultado3 = numObj2.reduce((acumulador, valorActual) => {
  return acumulador + valorActual.value;
}, 0);
console.log(resultado3);
