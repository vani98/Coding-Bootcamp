//FUNCIONES
//Es uno de los temas mas importantes en JS
//Es un bloque reutilizable de código
//Tienen 2 partes declarar la funcion y correr o llamar la funcion

// Declarar la función
function funcName() {
  //Código
}
function tresConsolas() {
  console.log("Hola");
  console.log("Hola");
  console.log("Hola");
}
// tresConsolas();

function dadoRandom() {
  let numero = Math.round(Math.random() * 6);
  console.log(numero);
}
//cantidad -> parametro
function lanzarDado(cantidad) {
  for (let index = 0; index < cantidad; index++) {
    dadoRandom();
  }
}
//cantidad -> argumento
// lanzarDado(2);

//funcion de nombre completo
//JS no valida el tipo de los parámetros, si le pongo un numero o un bool lo toma igual, si necesito validarlas lo tengo que hacer dentro de la función
function nombreCompleto(nombre, segundoNombre) {
  //validar que segundoNombre sea un string, en otros lenguajes como go se puede asignar esto dentro del if
  if (typeof nombre === "string" && typeof segundoNombre === "string") {
    console.log(`Tu nombre es ${nombre} ${segundoNombre}`);
  } else {
    console.log(`Datos no válidos`);
  }
}
// nombreCompleto();
// nombreCompleto("carmen", 1);
// nombreCompleto("carmen", "vanina");

//Funciones de matemáticas
function cuadrado(numero) {
  console.log(numero * numero);
}
function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
function dividir(numero1, numero2) {
  console.log(numero1 / numero2);
}
// cuadrado(5);
// sumar(50, 250);
// dividir(50, 10);

//VOID indica que estas funciones no devuelven nada, solo undefined, pero no un valor, lo que hacen es solamente escribir en consola

//RETURN es util porque podemos guardar el valor que devuelve la función en una variable o pasarla a otra función
//ptros lenguajes pueden retornar muchos valores, en JS return retorna un solo valor, ¿Cómo podemos hacer para retornar más valores? Poniendo los valores dentro de un array u objeto

function restar(numero1, numero2) {
  return numero1 - numero2;
}
let restaDeNum = restar(20, 5);
// console.log(restaDeNum);

function retornaMuchos() {
  return [4, 5, 10, 25];
}
let arr = retornaMuchos();
// console.log(arr);

//Ejemplo de función con varios parámetros que devuelva un array
function cuadrados(...argumento) {
  miArray = [];
  for (let index = 0; index < argumento.length; index++) {
    miArray.push(argumento[index] * argumento[index]);
  }
  return miArray;
}

let arrCuadrados = cuadrados(1, 2, 3, 4, 5);
let [valor1, valor2, valor3] = cuadrados(5, 4, 3); //destructuring en array
// console.log(valor1);
// console.log(valor2);
// console.log(valor3);

// console.log(arrCuadrados);

// Funcion para ver si el color es rojo V1
function esRojo1(color) {
  if (color.toLowerCase() == "rojo") {
    return true;
  } else {
    return false;
  }
}
// console.log(esRojo1("rojo"));

//Funcion para ver si el color es rojo V2(FORMA REDUCIDA)
function esRojo2(color) {
  if (color.toLowerCase() == "rojo") {
    return true;
  }
  return false;
}
// console.log(esRojo2("rojo"));

//Funcion para ver si el color es rojo V3(MAS REDUCIDA)
function esRojo3(color) {
  return color.toLowerCase() == "rojo";
}
// console.log(esRojo3("rojo"));

//Ejemplo de validar personas
//Requisitos: Contraseña mayor a 8 caracteres, sin espacios en blanco, no puede contener el nombre del usuario

//Manera larga
function checkPassword(pass, username) {
  if (pass.length < 8) {
    return false;
  } else if (pass.includes(" ")) {
    //podia usar include o indexof
    return false;
  } else if (pass.includes(username)) {
    return false;
  } else {
    return true;
  }
}
let MsjCheckPass = checkPassword("superseguro", "usuario")
  ? "Tu pass es correcta"
  : "PassInvalida";
// console.log(MsjCheckPass);

//Manera corta V2

function checkPassword2(pass, username) {
  let passwordLength = pass.length >= 8;
  let passwordBlank = !pass.includes(" ");
  let passwordHasUsername = !pass.includes(username);
  return passwordLength && passwordBlank && passwordHasUsername;
}
let MsjCheckPass2 = checkPassword2("superseguro", "usuario")
  ? "Tu pass es correcta"
  : "PassInvalida";
// console.log(MsjCheckPass2);

//Funcion reduce
notasAlumno = [10, 5, 4, 8];
function promedio(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total / arr.length;
}
let promedioAlumno = promedio(notasAlumno);
// console.log("El promedio es: ", promedioAlumno);

//FUNCTION EXPRESSION

let multiplicar = (a, b) => {
  return a * b;
};

let sum = (a, b) => {
  return a + b;
};
let div = (a, b) => {
  return a - b;
};

//FUNCIONES EN ARRAY

let mathOperations = [multiplicar, sum, div];

// console.log(mathOperations[0](5, 5));

for (const fn of mathOperations) {
  let resultado = fn(5, 5);
  //   console.log(resultado);
}

//callbacks usa una función como parámetro de otra función
let doMath = (a, b, cb) => {
  return cb(a, b);
};
// console.log("Do math:", doMath(5, 5, multiplicar));

let cambiarAyB = (a, b, cb) => {
  let num1 = a * a;
  let num2 = b * b;
  return cb(num1, num2);
};
// console.log("Cambiar A y B:", cambiarAyB(5, 5, multiplicar));

const multiplicarBy = (num) => {
  let numeroRecordado = num;
  return (otroNumero) => {
    return numeroRecordado * otroNumero;
  };
};
const doble = multiplicarBy(2);
const triple = multiplicarBy(3);
const cuadruple = multiplicarBy(4);

console.log(doble(50));
console.log(triple(30));
console.log(cuadruple(25));
