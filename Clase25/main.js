/*
DOM -> Document Object Model
- Es una representacion en JS de una pagina WEB
- Es un monton de objetos con lo que podemos interactuar con JS
*/

// console.dir(document);

//SELECCION DE ELEMENTOS DE DOM

//documento.getElementById()
// Nos trae el elemento que tenga ese ID

const myH1 = document.getElementById("titulo");
console.dir(myH1.innerText);

setTimeout(() => {
  myH1.innerText = "Soy otro título";
}, 3000);

const myP = document.getElementById("text");
console.dir(myP);

const myPs = document.getElementsByTagName("p");
console.dir(myPs);

//PASAR DE HTM(L COLECTION A ARRAY
//Primera forma
const myPsArray = Array.from(myPs);
//segunda forma
myPsArray.forEach((p) => console.log(p.innerText));
//tercera forma
//Loop que nos permite usar iteradores en HTMLCOLLECTION -- FOR OF
for (const p of myPs) {
  console.log("[forOf]");
  console.dir(p);
}

//Seleccionamos imput
const inputs = document.getElementsByTagName("input");
console.dir(inputs);

for (const input of inputs) {
  input.value = "1";
}

//Los input no tienen href, pero los a si, con esto comprobamos que cada uno tiene sus particularidades
const a = document.getElementsByTagName("a");
console.dir(a);

//TODOS LOS ANTERIORES SE PUEDEN RESUMIR EN ESTOS

//query selector
const myUl = document.querySelector("#ul_1");
console.dir(myUl);
// Elquery selectorTe trae el primero que encuentra
//Acortamos el scope (en vez de document la constante)
const li = myUl.querySelector(".cheto");

// Para traer más se utiliza querySelectorAll
const lis = myUl.querySelectorAll(".cheto");
console.dir(lis);

// innerHTML -> nos devuelve un string del html dentro de un elemento
console.log(myUl.innerHTML);

//Para que quiero el inner HTML?

const ulHeroes = document.querySelector("#heroes");
console.dir(ulHeroes);

//Puedo agregar cosas al HTML
// setTimeout(() => {
//   ulHeroes.innerHTML += `<li>Hulk<in</li>`;
// }, 2000);

setTimeout(() => {
  for (let index = 0; index < 50; index++) {
    ulHeroes.innerHTML += `<li>Hulk ${index}</li>`;
  }
}, 2000);

//Atributos
const inputs2 = document.querySelectorAll("form input");
console.dir(inputs2[3].getAttribute("max"));
console.dir(inputs2[3].getAttribute("min"));
console.dir(inputs2[3].getAttribute("miAtributoCustom"));

const a2 = document.querySelector(".more a");
const img = document.querySelector(".more img");

console.log(a2.href);
console.log(img.src);

// //PARENT / CHILDREN / SIBILING

console.log(
  inputs2[0].nextElementSibling.nextElementSibling.previousElementSibling
);
console.log(inputs2[0].parentElement);
console.log(inputs2[1].parentElement);
console.log(inputs2[2].parentElement);
console.log(inputs2[3].parentElement);

// ¿Cómo acceder a los formularios ?
// Se le pone un name al form y se lo llama
const myForm = document.forms.formCheto;
console.log(myForm);

//Stylesss
const todo = document.querySelector(".todo");

//Podemos agregar estilos asi
// todo.style.color = "grey";
// todo.style.opacity = "50%";
// todo.style.textDecoration = "line-through";

//Pero es mejor asi
todo.classList.add("realizado");
todo.classList.remove("realizado");
todo.classList.toggle("realizado");

//Crear un elemento de JS
//Este elemento está creado en la memoria de JS, pero no está agregado, para agregarlo hay que renderizarlo, es decir, agregarlo a un elemento
const myLiElement = document.createElement("li");
myLiElement.classList.add("todo");
myLiElement.innerText = "Comprar Vino";

const myLiElement2 = document.createElement("li");
myLiElement2.classList.add("todo");
myLiElement2.innerText = "Comprar Salamin";

//Renderizamos entonces
const ulTodos = document.querySelector("#todos");
//appendChild solo agrega uno, append agrega más de uno
ulTodos.append(myLiElement, myLiElement2);

setTimeout(() => {
  myLiElement2.remove();
}, 3000);

//EVENTOS INTROOOO

//Se utiliza en react
//Esta funcion se agrega a window y va a contar los clicks
// function log(event) {
//   console.log("click en el boton");
// }

// Lo del body en JS

// function log(event) {
// console.log(event.target);
// console.log("click en el body");
// }

const body = document.querySelector("body");
//acepta dos parametros, el evento y el callback
// addEventListener("click", log);

//Haciendo clicks en el boton
function log(event) {
  //si hacemos un console.log solamente a event nos va a tirar datos útiles uno de ellos es el target
  console.log(event.target);
  console.log("click en el boton");
}

const MyButton = document.createElement("button");
MyButton.innerText = "Click me!";
MyButton.classList.add("myButton");

body.append(MyButton);

MyButton.addEventListener("click", log);

// const liTodos = document.querySelectorAll("#todos .todo");

// for (const li of liTodos) {
//   li.addEventListener("click", realizado);
// }

// function realizado(evento) {
//   let li = evento.target;
//   li.classList.toggle("realizado");
// }
