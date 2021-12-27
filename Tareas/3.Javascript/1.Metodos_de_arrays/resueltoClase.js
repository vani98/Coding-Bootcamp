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

const ingresos = movimientos.filter((obj) => obj.tipo === "ingreso");
const extraccion = movimientos
  .map((obj) => {
    return {
      ...obj,
      monto: obj.monto * 2,
    };
  })
  .filter((obj) => obj.tipo === "extraccion")
  //encadenamos
  .reduce((acc, currentValue) => {
    return { monto: acc.monto + currentValue.monto };
  });

console.log(ingresos);
console.log(extraccion);

// Una forma
// const totalIngresos = ingresos.reduce((acc, currentValue) => {
//   return acc + currentValue.monto;
// }, 0);
// console.log(totalIngresos);

//sin encadenar
const totalIngresos = ingresos.reduce((acc, currentValue) => {
  return { monto: acc.monto + currentValue.monto };
});
console.log(totalIngresos.monto);

console.log(extraccion.monto);

const total = totalIngresos.monto - extraccion.monto;
console.log(total);
