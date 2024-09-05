function funcionStandart() {
  console.log('Soy la función estandar de javaScript');
}
funcionStandart(); //

const arrowFunction = () => {
  console.log("Soy la 'Arrow function de JS'");
};
arrowFunction();

const returnFunction = () => {
  return 'Retorno un string';
};
console.log(returnFunction());

const parameterFunction = (param) => {
  return param;
};
console.log(parameterFunction(true));

const functionOnfunction = (a, b) => {
  const square = (x) => {
    return x * x;
  };

  return square(a) + square(b);
};
console.log(functionOnfunction(3, 4));

const paramDefault = (a, b = 3) => {
  return a * b;
};
console.log(paramDefault(4));

const paramRest = (multiplicar, ...argumentos) => {
  return argumentos.map((x) => multiplicar * x);
};
let array = paramRest(4, 1, 2, 3);
console.log(array);

/* Funciones predefinidas */
const nanFunction = (arg) => {
  return isNaN(arg);
};
console.log(nanFunction('hola'));

const floatFunction = (arg) => {
  return parseFloat(arg);
};
console.log(floatFunction('1230.420'));

/* Variables LOCALES Y GLOBALES */

let varGlobal = 'Soy una variable global';

const globalFunction = (gVar) => {
  console.log(gVar);
};
globalFunction(varGlobal);

const localFuntion = (lVar) => {
  let varLocal = 'Soy local, solo pueden acceder desde este bloque';
  console.log(lVar + ' --> ' + varLocal);
};
localFuntion('Argumento xd');
//console.log(varLocal); //No está definido

/* Opcional */

const extraFunction = (char1, char2) => {
  let numero = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Numero: ' + i + ' - ' + char1 + ' Y ' + char2);
    } else if (i % 3 === 0) {
      console.log('Numero: ' + i + ' - ' + char1);
    } else if (i % 5 === 0) {
      console.log('Numero: ' + i + ' - ' + char2);
    } else {
      numero++;
    }
  }
  return console.log(numero);
};
extraFunction('Soy multiplo de 3', 'Soy multiplo de 5');
