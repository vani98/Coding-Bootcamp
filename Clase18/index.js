//-----Valor por default en una función
const sum = (a = 0, b = 0) => {
  return a + b;
};
// console.log(sum(5)); //si no tenemos valores default, JS intenta hacer 5 + Undefined y como resultado da NaN
// console.log(sum(5));

const duplicarArray = (arr = []) => {
  //Esto es opcional pero puede sumarse al valor por defecto para que trate los errores para cuando no ingresen datos como array
  if (arr.length !== undefined) {
    return arr.map((v) => v * 2);
  } else {
    return "Error, no es un array";
  }
};

numbers = [2, 4, 6, 8];
let array1 = duplicarArray(numbers);
// console.log(array1);
//Si no ponemos un valor por defecto este tira error porque no recibo un array
let array2 = duplicarArray(2, 4, 6, 8);
// console.log(array2);
//Si no ponemos un valor por defecto este tira error porque tampoco recibe un array
let array3 = duplicarArray();
// console.log(array3);

//----- SPREAD OPERATOR
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let todoJunto = [...arr1, ...arr2]; //No solo concatena, sino que también hace una copia del array original
// console.log(todoJunto);

//Esto esta MAL
let copyArr1 = arr1; //acá intentamos copiar el array pero no lo estamos copiando, estamos tomando su pocisión en memoria
copyArr1.push(30); //por eso al hacer un push a lo que tecnicamente copiamos estamos modificando al original y eso es lo que NO QUEREMOS HACER.
// console.log(copyArr1);
// console.log(copyArr1 === arr1);

//Objetos con SPREAD
const auto = {
  ruedas: 4,
  motor: 1.4,
  calefaccion: true,
};
const sedan = {
  ...auto,
  puertas: 4,
  tipo: "familiar",
};
const fordFiesta = {
  ...sedan,
  marca: "ford",
};
// console.log(fordFiesta);

const changeFordByFiat = {
  ...fordFiesta,
  marca: "Fiat",
};
// console.log(changeFordByFiat);

//Nested OBject
const orden = {
  id: "231313213",
  monto: 500,
  direccion: {
    calle: "Rivadavia",
    numero: 123,
  },
};

const copyOrden = {
  ...orden,
};
// console.log(copyOrden == orden); //Esto no es igual porque apuntan a diferentes lugares en memoria
// console.log(copyOrden.direccion === orden.direccion); //Esto da false, ya que para nestear un objeto solo tomará el primer objeto, si este objeto tiene otro objeto dentro no es recursivo, si queremos que también realice una copia desde el segundo objeto debemos de indicarselo
//SOLUCIONADO AL NESTEAR
const copyOrden2 = {
  ...orden,
  direccion: {
    ...orden.direccion,
  },
};
// console.log(copyOrden2.direccion === orden.direccion);

//----- PARAMETROS REST
//Toma elementos del array
//¿Qué hacemos si queremos mostrar saludos por pantalla en una función?
//Forma más fácil, menos práctica
const imprimirArgumentos = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
// imprimirArgumentos("Hola", "Hello", "こんにちは");

//¿Cómo podemos ir optimizandoló? COn arguments, pero las arrow function no tienen la capacidad de utilizar arguments
function imprimirSaludos() {
  //args por argumentos es convencion
  let args = Array.from(arguments); //arguments es una palabra reservada de las funciones declaradas que hace que todo lo que le pase lo guarda en un objeto y con array.from convierto ese objeto en un array
  for (const saludo of args) {
    console.log(saludo);
  }
}
// imprimirSaludos("Hola", "Hello", "こんにちは");

// REST CON JS MODERNO

const imprimirSaludos2 = (...args) => {
  for (const saludo of args) {
    console.log(saludo);
  }
};
// imprimirSaludos2("Hola", "Hello", "こんにちは");

//1:38:34

//TAREA FUNCION
//Imitar el método touppercase con map, hacer un spread de un string
//1. Tomar un string como parametro y a ese string lo van a hacer un spread en un array y sobre ese array van a mutarlo y lo van a devolver en string pero con mayusculas.
//entrada mayus('hola'), salida HOLA

const mayus = (str) => {
  // arr = [...str];
  // let mayus = arr.map((value) => value.toUpperCase()).join("");
  // return mayus;
  //Forma resumida
  return [...str].map((value) => value.toUpperCase()).join("");
};

// console.log(mayus("Hola"));

//---- DESTRUCTURING ARRAY
let marvel = [
  "Iron Man",
  "Capitan America",
  "Thor",
  "Hulk",
  "Black WIdow",
  "Falcon",
];

let ironMan = marvel[0];
let [elMartir, elJefe, , elVerdeEnorme] = marvel;
// console.log(ironMan);
// console.log(elMartir);
// console.log(elJefe);
// console.log(elVerdeEnorme);

//---- DESTRUCTURING OBJECT
const book = {
  author: "J.J.R. Tolkien",
  title: "El señor de los anillos",
  cover: "Dura",
  measure: {
    height: 50,
    width: 50,
  },
};
let { author, cover: tapa, measure } = book; // : renombra
// console.log(author);
// console.log(tapa);
// console.log(measure.height);

//---- SHORT HAND PROPERTIES

const estadisticas = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acumulador, valor) => acumulador + valor);
  const prom = sum / arr.length;
  return {
    // suma: sum,
    // minimo: min,
    // maximo: max,
    //Es lo mismo que hacer esto
    sum,
    min,
    max,
    promedio: parseFloat(prom.toFixed(2)),
  };
};
const datos = [1, 5, 32, 7, 8, 55, 66];
const resultados = estadisticas(datos);
// console.log(resultados);

//COMPUTED PROPERTIES
const role = "admin";
const empleado = "Nico";

// const equipo = {
//   //empleado es dinámico pero rol no
//   role: empleado,
// };
// console.log(equipo);

// Para que role sea dinámico tenemos que hacer esto

const equipo = {
  //empleado es dinámico pero rol no
  [role]: empleado,
};
// console.log(equipo);

//TAREA
//Repasar el método reduce
// contarLetras('abbcccddddeeeee') => {a:1,b:2,c:3,d:4,e:5}
//Ayuda: Usar reduce((value) => value.toUpperCase()).join("");

contarLetras = (string) => {
  return [...string].reduce((acumulador, letra) => {
    return {
      ...acumulador,
      [letra]: acumulador[letra] ? ++acumulador[letra] : 1,
    };
  }, {});
};
console.log(contarLetras("abbccc"));
