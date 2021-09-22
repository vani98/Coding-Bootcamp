//Métodos - This - DOM
//------- Métodos - funciones dentro de un objeto

// const doMath = {
//   multiplicar: function (a, b) {
//     return a * b;
//   },
//   sumar: function (a, b) {
//     return a + b;
//   },
//   restar: function (a, b) {
//     return a - b;
//   },
//   dividir: function (a, b) {
//     return a / b;
//   },
// };

// console.log(doMath.multiplicar(2, 2));

//Nueva forma

const doMath2 = {
  multiplicar(a, b) {
    return a * b;
  },
  sumar(...args) {
    return args.reduce((acumulador, valores) => acumulador + valores);
  },
  restar(a, b) {
    return a - b;
  },
  dividir(a, b) {
    return a / b;
  },
};

// console.log(doMath2.restar(10, 2));
// console.log(doMath2.sumar(10, 2, 8, 5));

//--------- THIS - hace referencia al scope de su contexto de ejecución
// a veces hace referencia al scope global (en el browser el spcope es window/ en node el scope es global)
// pero otras veces hace referencia al objeto que lo contiene
// pero tampoco esto es una regla general, sino que puede cambiar dependiendo del contexto de ejecución

// Correr la funcion hola por navegador
//En una función declarada this apunta al objeto window
function hola() {
  console.log(this);
}
// hola();

//Con Objetos this no hace referencia a window, sino que hace referencia al mismo objeto. No siempre es así pero para los casos que vamos a ver si

const perrito = {
  sonido: "guau",
  ladrar() {
    console.log(this);
  },
};
// perrito.ladrar(); // No da window ni global, da perrito

//Para que me sirve?

const alumno = {
  nombre: "Maria",
  apellido: "Gomez",
  nombreCompleto() {
    console.log(`El alumno es: ${this.nombre} ${this.apellido}`);
  },
};

// alumno.nombreCompleto();
// alumno.nombre = "Jose"; // El this es dinamico, siempre se fija el valor actual que tiene el objeto
// alumno.nombreCompleto();

const alumnos = {
  nombre: "Maria",
  apellido: "Gomez",
  notas: {
    algebra: 10,
    fisica: 8,
    quimica: 10,
  },
  //this cuando está en un método dentro del objeto apunta al objeto
  nombreCompleto() {
    let { nombre, apellido } = this;
    return `${nombre} ${apellido}`;
  },
  //el for in lo reemplazó a esto igual
  promedio() {
    let materias = Object.keys(this.notas); //devuelve algebra, fisica, quimica
    return (
      materias
        //No podemos tener una funcion normal, porque this referenciaría a windows, el => respeta el contexto en el que se está ejecutando, con la función normal no sabe a que referenciar con el this
        .map((materia) => {
          return this.notas[materia]; //alumno.notas["algebra"] en la primer iteracion
        }) //devuelve 10, 8,10
        .reduce((acc, val) => acc + val) / materias.length
    );
  },
  printPresentacion() {
    console.log(
      `El alumno ${this.nombreCompleto()} tiene un promedio de ${this.promedio()}`
    );
  },
};

alumnos.printPresentacion();
