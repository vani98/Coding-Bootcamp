//DOM - Document Object Model
//Es una representacion en objetos de JS con los que podemos interactuar
//Es la interfaz que nos permite acceder al contenido
//Es la interfaz para manipular el contenido
// console.dir(document);

//============== Seleccion de elementos

//document.getElementById('')

const myH1 = document.getElementById("titulo");
// console.dir(myH1);

const myp = document.getElementById("text");
// console.dir(myp);

//document.getElementByTagName
const myTag = document.getElementsByTagName("input");
//puedo utilizar el forech porque son iterables, pero para utilizar maps debo transformarlo en array

// const myTagArray = Array.from(myTag);
// myTagArray.map((obj) => console.dir(obj));

for (const input of myTag) {
  // console.dir(input);
}

//document.getElementByClassName('')
//Obtengo todas las clases que diga producto
// const productos = document.getElementsByClassName("productos");
// console.dir(productos);
//Si quiero obtener todas las clases que digan producto en un determinado lugar puedo hacer esto. PERO ES VIEJO!!
const myuls = document.getElementById("ul_1");
const prodInMyuls = myuls.getElementsByClassName("productos");
// console.dir(prodInMyuls);

//MODO NUEVO - querySelector

const myuls1 = document.querySelector("#ul_1");
// console.dir(myuls1);

//Si busco esto solamente con querySelector nos trae el primer p que encuentra
const p = document.querySelectorAll("p");
// console.log(p);

const prodInMyuls2 = document.querySelectorAll("#ul_2 .productos");
// console.log(prodInMyuls2);

const myImg = document.querySelectorAll(".more img");
// console.log(myImg);

//============== Modificar elementos
//poniendo valor por defecto a los input
const modInput = document.querySelectorAll("input");
console.log(modInput);

//en un evento OnClick puedo hacer que cuando hace click limpia la búsqueda
for (const input of modInput) {
  input.value = "Modificado";
}

const title2 = document.querySelector("#titulo_2");
console.log(title2.innerText);

//No es tan recomendable utilizarlo tanto, pero sirve mucho para las pruebas
setTimeout(() => {
  //innerText
  title2.innerText = "Mi titulo modificado";
}, 3000);

//innerText y textContent
const liText = document.querySelector("#ul_1 .productos");
//innerText devuelve el texto que tiene
console.log(liText.innerText);
//textContent devuelve el texto con saltos de lineas y demas
console.log(liText.textContent);
//innerHTML devuelve un string de todo el html dentro de un elemento
console.log(liText.innerHTML);
const form = document.querySelector("form");
console.log(form.innerHTML);

// agregar un elemento en un li
const heroes = document.querySelector("#heroes");
setTimeout(() => {
  //si le pongo igual borra todos y deja ese, con el += lo agrega y deja a los demas
  heroes.innerHTML += "<li>Hulk</li>";
}, 3000);

//Acceder a VALUE(para los input) - SRC(para las img) - HREF(para los a)

console.log(modInput[0].value);

const url = document.querySelector(".more a");
console.log(url.href);

console.log(myImg[0].src);

//GetAtribute
//sirve para ver atributos que de otra forma no se podrían buscar por la forma anterior, el max no se puede por ejemplo, también nos permite acceder a atributos que nosotros creemos, por ejemplo miCustumAtribute es inventado por mi

const inputForm = document.querySelectorAll("form input");
console.log(inputForm[3].getAttribute("max"));

//SetAtribute
//igual que el anterior pero permite insertar un valor
inputForm[3].setAttribute("nuevoAtributo", "cambiado lala");

console.log(inputForm[3].getAttribute("nuevoAtributo"));

//PARENT(padres)- CHILDREN(hijos) - SIBILING(hermanos)

//saber cuantos hijos tiene form
console.log(form.children);
console.log(inputForm[3].parentElement.parentElement);
console.log(inputForm[1].nextElementSibling);
console.log(inputForm[1].previousElementSibling);

//MODIFICAR ESTILOS =========
//ver estilos de css
// console.log(myH1.style);
//Modifica los estilos pero en linea, no está muy bueno hacerlo así
//Con JS no se usa la misma notacion de CSS, porque en esta debe respetar Camel case
myH1.style.color = "blue";
//Cambiando el CSS desde js, no es bueno hacerlo asó
const todo = document.querySelector(".todo");
// todo.style.color = "grey";
// todo.style.opacity = "50%";
// todo.style.textDecoration = "line-through";

//para insertar una clase creada en el input, podemos hacer así, pero para esto tengo que poner todas las clases, antiguas y existentes, pero muchas veces nose cuales son sus otras clases, POR ESO NO ES RECOMENDABLE ACÁ
// todo.setAttribute("class", "todo realizado");

//ClassList - con esta podemos usar métodos como add, contain, remove y toggle (en este si está la clase la agrega, sino la saca) FORMA RECOMENDADA
todo.classList.add("realizado");
todo.classList.remove("realizado");
todo.classList.toggle("realizado");
console.log(todo.classList);

//CREAR ELEMENTOS =========

//Nuevo H2
const nuevoH2 = document.createElement("H2");
nuevoH2.innerText = "h2 creado con createElement";

const dinamico = document.querySelector(".dinamico");

//appendChild() agregar hijo en el último lugar
dinamico.appendChild(nuevoH2);

//insertBefore
const nuevoHeroe = document.createElement("li");
nuevoHeroe.innerText = "Batman";
heroes.insertBefore(nuevoHeroe, heroes.children[1]);
//append
const todos = document.querySelector("#todos");
const comprarRopa = document.createElement("li");
comprarRopa.textContent = "Comprar ropa";
comprarRopa.classList.add("todo");
const comprarEnsalada = document.createElement("li");
comprarEnsalada.textContent = "Comprar ensalada";
comprarEnsalada.classList.add("todo");

todos.append(comprarRopa, comprarEnsalada);

//==ELIMINAR
//removeChild - me pide que le pase el hijo a eliminar
todos.removeChild(todos.children[2]);
//remove
setTimeout(() => {
  nuevoH2.remove();
}, 2000);
