//-------------------------------------------------Introducción a JS

console.log("==== Incremento");

var numero = 40;
console.log(numero ++);
console.log(numero +=1);

console.log("==== If "); 

var edad = 25;
if (edad > 18){
    console.log("podes votar")
}else {
    console.log("no podes votar")};

//--------------------------------------------------LOOPS

console.log("==== For tradicional");
var alumnos = ['Alumno1','Alumno2','Alumno3','Alumno4']; 

//loop for tradicional
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}
console.log("==== For of");
// loop for of
for (const alumno of alumnos) {
    console.log(alumno);
}

console.log("==== Objeto");
let miObjeto = { a:1,b:2,c:3,d:4}; 

//loop for in
for (let propiedad in miObjeto) {
   console.log(`${propiedad}: ${miObjeto[propiedad]}`);
}

// Functions ___________________________*
console.log("==== Funciones");

nucbaTeSaluda("Vani"); // puede ir en cualquier lado 1 - js en fuction tiene top level hoisting, si declaras una funcion termina arriba del código para que sea accesible en todo el scope

//palabra reservada, nombre de funcion y (){}
function nucbaTeSaluda (nombre){
    console.log(`${nombre} Nucba te saluda`);
}
nucbaTeSaluda("Vani"); // puede ir en cualquier lado 2 */

// Arrow functrion
    //Esta utiliza el this de manera distinta

// ¿Cómo agregamos dinamismo? reutilizacion de códigos en multiplicaciones

const multipicarBy = (number) => {
    let x = number;
    return function (numeroDespues){
        return x * numeroDespues;
    };
};

// Todo esto son closures, guarda number en el scope y espera por otro valor

    const multipicarPor5 = multipicarBy(5);
    console.log(multipicarPor5(5));

    // const multipicarPor10 = multipicarBy(10);
    // console.log(multipicarPor10(10)); 
