//Primer ejercicio

//Operadores de asignación
let asignacion = 2;
console.log(asignacion);

asignacion += 15;
console.log(asignacion);

asignacion **= 2;
console.log(asignacion);

asignacion <<= 10;
console.log(asignacion);

asignacion >>= 10;
console.log(asignacion);

//Operadores lógicos
let var1 = 2;
let var2 = 4;

console.log(3 == '3');
console.log(3 === '3');
console.log(var1 > var2);
console.log(var1 < var2);

//Operadores aritméticos
console.log(var1 + var2);
console.log(var2 ** var1);
console.log(var2++);
console.log(++var2);

/**
 * Faltan varios operadores como:
 * -Operadores Lógicos
 * -Operadores en cadena
 * -Operador condicional ternario
 * -Operador de comas
 * -Operador unarios
 */

/* ------------------------------------------------------------------------ */

const functionControlIf = (numA, numB) => {
  if (numA <= numB) {
    console.log('Es menorr!!');
  } else {
    console.log('No es menor!!!');
  }

  for (let i = 0; i <= numB; i++) {
    console.log(`No paro hasta: ${i}`);
  }
};
// functionControlIf(4, 5);

const functionControlExcept = (str) => {
  let num = Number(str);
  if (isNaN(num)) {
    throw new Error('El valor no se puede convertir a número');
  }
  return num;
};

try {
  console.log(functionControlExcept('123'));
} catch (error) {
  console.error('Ocurrio un error: ', error.message);
} finally {
  console.log('Intento de conversión finalizado');
}

/* ---------------------------------------------------------------------------------- */
//Opcional

for (let i = 10; i <= 55; i++) {
  if (i % 2 == 0 && i % 3 !== 0 && i != 16) {
    console.log(i);
  }
}
