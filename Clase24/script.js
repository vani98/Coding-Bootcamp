// Convertir un objeto en un array

//Forma uno

const obj = {
  prop1: "uno",
  prop2: "dos",
};

const obj2 = {
  ...obj,
  prop3: "tres",
};

const objToArray = Object.keys(obj2).map((key) => obj2[key]);
console.log(objToArray);

const array = [];

for (const key in obj2) {
  console.log(key);
  array.push(obj2[key]);
}
console.log(array);

//Convertir un string en array

const string = "hola";
//si lo que tengo es un iterable lo transformo a array
const arrToString = Array.from(string);

//El for of solo sirve con iterables, con objetos no para eso está el forin
for (const str of string) {
  console.log(str);
}
console.log(arrToString);

//01:05:00
