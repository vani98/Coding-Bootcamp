//title: CONVERTIR UN OBJETO EN UN ARRAY

const obj = {
  prop1: "uno",
  prop2: "dos",
};

const obj2 = {
  ...obj,
  prop3: "tres",
};

//? FORMA 1 (con Object.keys y .map)

// Object.keys devuelve el nombre de las llaves de los objetos ---> [ 'prop1', 'prop2', 'prop3' ]
const objToArray = Object.keys(obj2).map((key) => obj2[key]);
// console.log(objToArray); // [ 'uno', 'dos', 'tres' ]

//? FORMA 2 (con for in)

const array = [];

for (const key in obj2) {
  // console.log(key);  // hace lo mismo que Object.keys
  array.push(obj2[key]);
}
// console.log(array);

//title CONVERTIR UN STRING(o un iterable) EN ARRAY

//? FORMA 1 (con Array.from)

const string = "hola";
//lo que hace es: si lo que tengo es un iterable lo transformo a array
const arrToString = Array.from(string);

/*El for of solo sirve con iterables, con objetos no, para eso está el for in
Como el string es iterable podemos usarlo en un for of y mostrarlo letra por letra, pero no por eso es un array.*/

// // for (const str of string) {
// // console.log(str);
// // }

console.log(arrToString);

const lis = document.querySelectorAll("li");
// console.dir(lis); //Vemos que los li no son arrays, pero si iterables
const arrayLi = Array.from(lis);
// console.dir(arrayLi);

//? FORMA 2 (con un spread operator)

//Puedo hacerlo con spread operator porque este tambien opera con iterables
const arrayLiSpread = [...lis];
console.dir(arrayLiSpread);
