// === Scope

// global
let a = "Soy global";

// en funciones
    //crean su propio contexto de ejecución

function fn(){
    let b = "Soy de una función";
    console.log(b); //acá si
} 

// en bloques | If-else-for-while-switch
    //let hace que las variables en bloques tengan que ser llamadas en su bloque
{
    let c = "Estoy en un bloque";
    console.log(c);
}

console.log(a);
fn();
// no puede ir acá console.log(b);
// con let no puede ir acá console.log(c);

//=== let 
//es blocking scope, las variables del bloque quedan en el bloque y las variables no se pueden redeclarar

let miVar = "Mi var";
// let miVar = "Otro var"; no se puede con let con var si
//si se puede reasignar
console.log(miVar = "Modifico var");
//=== const

// en const no se usa camel case, todo va en mayúsculas y con _
// const no mofica valores primitivos, los demas si puede, como por ejemplo un array, esto es porque los valores primtivos guardan directamente el valor en memoria y los demás solo guardan una referencia en memoria.

const MI_CONST = "Texto";
//MI_CONST = "Otro texto"; no se puede

//=== string

//en la consola de google poner: console.dir(String.prototype); para ver sus funciones y propiedades

// let myString = new String("Soy un string");
// console.log(myString);

let string1 = "String1";
let string2 = "      String2           ";
let string3 = "String3";
let text = "Soy un texto";
let fakeCSV = "120,M,ROJO";
let changeText = "Mi super, mi string";

//métodos o funciones de strings (cuando ponemos .aparecen en violeta)
    console.log(string1.toUpperCase());
    console.log(string2.trim());
    console.log(string3.indexOf('S'));
    //si ponemos indexOf de una palabra completa por ejemplo 'soy' muestra solo la pocision de la s
    console.log(string3.indexOf('g'));
    console.log(text.slice(4,6)); 
    console.log(text.slice(4)); 
    //split pasar nuestro texto a un array
    let textToArray = fakeCSV.split(','); //metodo del sting
    console.log(textToArray);
    //join para pasar un array a string
    let arrayToString = textToArray.join(',');//metodo del array
    console.log(arrayToString);
    //reemplazar una parte del array
    let textChanged = changeText.replace('Mi','Tu'); //Si en la oración hay dos mi, solo reemplaza el primero que encuentra, para hacer que reemplace todo hay que poner RegExp (expresiones regulares)
    console.log(textChanged);
    console.log(changeText); //nunca modifica el original
    

//propiedades de strings (cuando ponemos .aparecen en azul)
    console.log(string3.length);
    console.log(string3[0]);
    //ver el último caracter
    console.log(string3[string3.length - 1]);

let str = 'abcd';
//strings con for
for (let char of str){
    // console.log(char);
    console.log(char.toUpperCase().repeat(3))
}

// alert("Soy un alert");

//Numeros

    let numero1 = 10;
    let numero2 = 20.122;

    // ClaseMath
    console.log(Math.PI);
    console.log(Math.floor(numero2)); //Redondea para abajo
    console.log(Math.round(numero2)); //Redondea parejo
    console.log(Math.ceil(numero2)); //Siempre redondea para arriba
    console.log(Math.abs(-32)); // Valor absoluto
    console.log(Math.pow(5,2)); // Potencia
        //Numeros random que llegan hasta el 0.99.....
        let myRand = Math.random();
        console.log(myRand);
        //Valores aleatorios del 1 al 10
        console.log("math round");
        let paso1 = Math.random(); // numero random que no llega a 1
        let paso2 = paso1 * 10; // lo multiplico x10 para sacarle el 0
        let paso3 = Math.round(paso2); // lo redondeo para sacarle las comas
        console.log(paso3); // lo muestro
        //lo mismo lo hacemos en una linea
        console.log("math round");
        let randomNum = Math.round(Math.random()*10+1);

//PARSE INT, PARSE FLOAT
let textToInt= "5";
let textToFloat= "10.12002";

console.log(textToInt);
console.log(parseInt(textToInt));
console.log(textToFloat);
console.log(parseFloat(textToFloat));
