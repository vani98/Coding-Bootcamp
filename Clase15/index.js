//Cuando tenemos que mapear datos utilizamos arrays, objetos u ambos

//....... ARRAY - primer estructura de datos
let miArray = new Array("campera", "mochila", "lapicera"); //forma anterior, no se usa
// console.log(miArray);
let miOtroArray = ["fiat", "peugeot", "ford"]; //mejor forma
// console.log(miOtroArray);

let arrayChat = [
  ["Usuario1", "10:32", "hola, buenos dias!"],
  ["Usuario2", "11:00", "hola, ¿que tal?"],
];
/*
//mostrar el primer mensaje del usuario1
console.log("Mensaje de: " + arrayChat[0][0]+ "  Hora: " + arrayChat[0][1]+ "\n" + arrayChat[0][2]);
console.log("--");
//mostrar el primer mensaje del usuario2
console.log("Mensaje de: " + arrayChat[1][0]+ "  Hora: " + arrayChat[1][1]+ "\n" + arrayChat[1][2]);

//....... PUSH

//agregar mensaje del usuario1
arrayChat.push(['Usuario1','11:04','todo bien, escuchando una clase']);
//muestro respuesta
console.log("--");
console.log("Mensaje de: " + arrayChat[2][0]+ "  Hora: " + arrayChat[2][1]+ "\n" + arrayChat[2][2]);
*/

//agrega al final de la red
arrayChat.push(["Usuario1", "11:04", "todo bien, escuchando una clase"]);
arrayChat.push(["Usuario2", "11:10", "genial! ¿y sobre qué escuchas?"]);
arrayChat.push(["Usuario1", "11:12", "Sobre JS"]);

//....... UNSHIFT

//agregar al inicio del array
arrayChat.unshift(["Usuario2", "23:02", "Buenas noches!"]);
arrayChat.unshift(["Usuario1", "23:00", "Que descanses, buenas noches!"]);

//....... POP

//sacar al último del array
arrayChat.pop();

//....... SHIFT

//sacar el primero del array
arrayChat.shift();

//....... SPLICE

//splice (indice start, indice a borrar, nuevo valor), se usa para reemplazar, se utiliza para asignarlo a otra variable
//desde el indice uno hasta el 2 reemplazalo por esto
// console.log(arrayChat); //como estaba
let miOtroChat = arrayChat.splice(0, 2, ["Usuario1", "00:00", "Good Morning"]);
// console.log(miOtroChat); //los que saco
// console.log(arrayChat); //los que quedan

//....... FOR OF

//Lo mismo de antes con un for of

// for (let mensajes of arrayChat) {
//     usuario = mensajes[0];
//     hora = mensajes[1];
//     mensaje = mensajes[2];

//     console.log("Mensaje de: "+ usuario + "    Hora: "+ hora +"\n"+mensaje+ "\n");
// };

//....... SLICE

let arrayMuebles = ["Armario", "Mesa", "Silla", "Cómoda", "Mesa de luz"];
// console.log(arrayMuebles.slice(0));
// console.log(arrayMuebles.slice(0, 2));
// console.log(arrayMuebles.slice(0, 4));

//..... INDEXOF

// console.log(arrayMuebles.indexOf("Mesa"));
// console.log(arrayMuebles.indexOf("Biblioteca")); //Si no está tira -1

// if (arrayMuebles.indexOf("Biblioteca")==-1){
//     console.log("No tenemos ese producto");
// }else{
//     console.log("Si lo tenemos");
// };

//..... INCLUDE

let arrayMisNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 10, 23, 12, 43, 53, 14];
// console.log(arrayMisNumeros.includes(6)); //evita hacer el if en index of

// if (arrayMisNumeros.includes(6)) {
//   console.log("El 6 está");
// } else {
//   console.log("No está");
// }

//...... CONCAT

let articulosInterior = [
  "Juego de comedor",
  "Televisión",
  "Sillones de interior",
];
let articulosExterior = ["Columpio", "Mesa de exterior", "Silla para exterior"];
// let articulosTodos = [];
// console.log(articulosTodos);
// articulosTodos = articulosExterior.concat(articulosInterior);
// console.log(articulosTodos);

//.......... SPREAD OPERATOR

//lo mismo con spread operator
let articulosTodos = [...articulosExterior, ...articulosInterior];
// console.log(articulosTodos);

//....... REFERENCE TYPES

//Reference types, js guarda el valor de los primitivos, de los que no son primitivos solo guarda la posicion en memoria
let color = "rojo"; //variable tipo valor, guarda el valor
let otroColor = color; //variable tipo valor, se guarda "rojo"

// console.log(color,otroColor);
otroColor = "azul"; // Modifico el valor de otrocolor, pero color no fue afectado
// console.log(color,otroColor);

let arrayNum = [1, 2, 3, 4, 5]; //variable tipo referencial, guarda dirección en memoria, no el valor
let miOtroArrayNum = arrayNum; // <---- No guarda [1,2,3,4,5], guarda esto (0x14362312)
arrayNum.push(6);
arrayNum.push(7);

// console.log(arrayNum);
// console.log(miOtroArrayNum); //los dos apuntan a la misma direccion en memoria, por eso se modifican ambos

const arrayLetras = ["A", "B", "C"];
arrayLetras.push("D"); // ¿Porqué el array con const permite que le agregen datos con push?
// console.log(arrayLetras);
// arrayLetras = ["X","Y","Z"]; //¿Porqué no lo permite con reasignación?
//Porque en el push lo que hago es agregar un valor a una direccion en memoria, pero en la reasignación le estoy cambiando la direccion de memoria y esto tira error.

//...... OBJETOS

//Son conjuntos de datos como los arrays pero del tipo key - value (llave-valor)
//forma de declarar un objeto
// let miObj = new Object();
// console.log(miObj);
//forma 2 de declarar un objeto
let miOtroObj = {};

//al objeto le podemos poner propiedades como llave y un valor
let persona = {
  nombre: "Vani",
  edad: "23",
  pais: "Argentina",
};

// console.log(persona);

//¿Cómo accedemos a sus propiedades? por el dot notation
// console.log(persona.nombre);

//chat con objetos

let chatObj = {
  usuario: "Usuario1",
  msj: "Hola",
  hora: "10:30",
};
// console.log(chatObj);

// console.log(chatObj['usuario']); //puedo mostrarlo así tambien

const colores = {
  rojo: "#eb4d4b",
  amarillo: "#f9ca24",
  azul: "#30336b",
};

//el usuario selecciona el color rojo por ejemplo
let inputUserValue = "rojo";
//dos formas de mostrar
// console.log(colores[inputUserValue]); //de esta forma puedo hacerlo más dinámico
// console.log(colores.rojo); //si yo se las propiedades que ingresan esta es la mejor

//------- OBJETOS COMPLEJOS
const alumno = {
  nombre: "Nicolas",
  materias: ["algebra", "analisis matemático", "química", "física"],
  tel: {
    celular: 1111,
    casa: 222,
  },
  recursa: "no",
};

const ARRAYDEALUMNOS = [
  {
    nombre: "Nicolas",
    materias: ["algebra", "analisis matemático", "química", "física"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: false,
  },
  {
    nombre: "Vanina",
    materias: ["ingles", "programacion1", "economia"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: false,
  },
  {
    nombre: "María",
    materias: ["historia", "lengua", "geografia"],
    tel: {
      celular: 1111,
      casa: 222,
    },
    recursa: true,
  },
];

for (const objeto of ARRAYDEALUMNOS) {
  //operador ternario
  let recursa = objeto.recursa
    ? "recursa materias y llamar al " + objeto.tel.celular
    : "no recursa materias";
  console.log(`El alumno: ${objeto.nombre}, ${recursa}`);
}
