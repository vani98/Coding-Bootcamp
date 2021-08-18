//lista de supermercado
let supermarketList = [
  "arroz",
  "leche",
  "pan",
  "fideos",
  "mermelada",
  "gaseosa",
  "agua",
  "casancrem",
  "manteca",
  "dulce de leche",
];
// (a) ¿Qué tenés que comprar primero?

console.log(`Primero tengo que comprar: ${supermarketList[0]}`);

// (b) ¿Qué tenés que comprar último?

console.log(
  `Por último tengo que comprar: ${supermarketList[supermarketList.length - 1]}`
);
// (c) ¿Cuántos productos tenés que comprar?
console.log(`Tengo que comprar ${supermarketList.length} productos`);

// ----------------------------

console.log("\n---------- Actividad 2");
// Crear un usuario con tus datos:
// * Username
// * Name
// * Age
// * List of hobbies (OJO: dice lista de hobbies)
// * City
// * student: true or false

// Resuelva las respuestas, de la misma manera que se encuentra la primera

let user = {
  username: "Vani98",
  name: "Vanina",
  age: 23,
  listOfHobbies: ["programar", "escuchar música", "leer", "mirar videos"],
  city: "Buenos Aires",
  student: true,
};

// (a) ¿Cómo es tu username?

console.log(`Mi username es ${user.username}`);

// (b) ¿Cómo es tu nombre?

console.log(`Mi nombre es ${user.name}`);

// (c) ¿Cuál es tu edad?
// (Para les que se animen: acá podrían hacer una variable por fuera del
// objeto que valide si son mayores de edad o no, como vimos en clases).

if (user.age >= 18) {
  console.log(`Mi edad es ${user.age} y soy mayor de edad`);
} else console.log(`Mi edad es ${user.age} y soy mayor de edad`);

// (d) ¿Cuáles son tus hobbies? ¿Cuántos tenés?

console.log(
  `Mis hobbies son: ${user.listOfHobbies} y en total son ${user.listOfHobbies.length}`
);

// (e) ¿Estás estudiando actualmente?
// Ojo con esta: el student = false/true va a devolverles un booleano,
// el desafío es convertir ese boolean en una respuesta friendly
// para el humano que está leyendo sus respuestas.
if (user.student) {
  console.log("Estoy estudiando");
} else {
  console.log("No estoy estudiando");
}
