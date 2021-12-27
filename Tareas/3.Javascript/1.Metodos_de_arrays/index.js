const movimientos = [
  {
    tipo: "ingreso",
    monto: 5000,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 300,
  },
  {
    tipo: "extraccion",
    monto: 1000,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 2000,
  },
  {
    tipo: "ingreso",
    monto: 500,
  },
  {
    tipo: "extraccion",
    monto: 500,
  },
];

//variables
let totalIngresos = 0;
let totalExtracciones = 0;
let estadoCuenta;

//total de los ingresos

for (const mov in movimientos) {
  if (movimientos[mov].tipo.includes("ingreso")) {
    totalIngresos += movimientos[mov].monto;
  }
}
console.log(`El total de ingresos es de: ${totalIngresos}`);

//total de extracciones

for (const mov in movimientos) {
  if (movimientos[mov].tipo.includes("extraccion")) {
    totalExtracciones += movimientos[mov].monto;
  }
}
console.log(`El total de extracciones es de: ${totalExtracciones}`);

//estado final de la cuenta

estadoCuenta = totalIngresos - totalExtracciones;
console.log(`El estado actual de la cuenta es: ${estadoCuenta}`);
