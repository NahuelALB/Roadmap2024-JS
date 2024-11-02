/* // Creación de un Array
let arrayFrutas = ['Pera', 'Manzana', 'Naranja', 'Banana'];
console.log('Array de frutas: ', arrayFrutas);

//Acceder a un elemento
let elemento = arrayFrutas[3];
console.log(elemento);

//Array dentro de otros arrays
let arrayPeliculas = [
  ['Terror', 'Gore', 'Paranormal'],
  ['Acción', 'Bélica', 'Espionaje', 'Peleas'],
  ['Ficción', 'Superheroes', 'Aliens', 'Monstruos'],
];
console.log('Array dentro de otro: ', arrayPeliculas[1][2], arrayPeliculas[0]);

//Array con diferentes datos primitivos
let arrayPrimitivo = [
  'Comida',
  123,
  false,
  { Atencion: 'Precaución' },
  function () {
    return 3 ** 3;
  },
];
console.log(arrayPrimitivo[4]); */ //xxxxxxxx

/* --- Metodos de Array --- */

/* //Contar los elementos de un Array
console.log('Método length: ', arrayFrutas.length);

//Elimina el ultimo elemento de un array y retorna dicho elemento
let popArray = arrayFrutas.pop();
console.log('Metodo pop: ', popArray);

//Añade uno o mas elementos a un array y retorna y devuelve un nuevo valor en la propiedad "length"
let pushArray = arrayFrutas.push('Mandarina', 'Kiwi');
console.log('Método push: ', pushArray);

//Devuelve una concatenación de arrays
let nuevoArray = arrayFrutas.concat(arrayPrimitivo);
console.log('Metodo concat: ', nuevoArray);

//Devuelve un nuevo array que cumplan la condición
let nuevoArray2 = arrayFrutas.filter((elem) => elem.length === 7);
console.log('Método filter: ', nuevoArray2);

//Devuelve el primer elemento del array que cumpla la condición
let nuevoArray3 = arrayFrutas.find((elem) => elem.length <= 6);
console.log('Método find: ', nuevoArray3);

//Devuelve el indice del primer elemento del array que cumpla con la condición
let nuevoArray4 = arrayFrutas.findIndex((elem) => elem.length <= 6);
console.log('Método findIndex: ', nuevoArray4);

//Ejecuta la función indicada una ver por CADA elemento del array
arrayFrutas.forEach((elem) => console.log(elem + ': ForEach'));

//Retorna el primer indice en el que se puede encontrar un elemento, si no retorna -1 si no existe
console.log('Método indexOf: ', arrayFrutas.indexOf('Naranja'));

//Une todos los elementos en una cadena y retorna esta misma
console.log('Método join: ', arrayFrutas.join());
console.log('Método join: ', arrayFrutas.join(''));
console.log('Método join: ', arrayFrutas.join('_'));

//Elimina el primer elemento de un array y devuelve este mismo
let arrayNumeros = [1, 2, 3, 4, 5];
let numeroArray = arrayNumeros.shift();
console.log('Método shift: ', numeroArray);

//Añada uno o varios elementos al inicio de un array
let numeroNuevoArray = arrayNumeros.unshift(-1, 0);
console.log('Método unshift: ', numeroNuevoArray);

//Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
let arrayNombres = ['Jose', 'Roman', 'Flor', 'Lucas'];
let copyArray = arrayNombres.slice(1, 3);
console.log('Método slice: ', copyArray);

//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
arrayNombres.splice(3, 0, 'Nahuel'); //si cambias el "0" por "1" reemplazará el elemento de ese indice
console.log('Método splice: ', arrayNombres); */

/* ------------------------------------ Objeto literal ------------------------------------ */

//Creación de un Objeto
const vacio = {}; //Objeto vacio

//Objeto literal
const persona = {
  nombre: ['Agustin', 'Marcos'],
  edad: 32,
  genero: 'masculino',
  intereses: ['videojuegos', 'futbol'],
  bio: function () {
    return `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}`;
  },
  saludo: function () {
    return 'Hola, soy ' + this.nombre[0] + '.';
  },
};

/* console.log(persona.nombre);
console.log(persona.nombre[0]);
console.log(persona.bio()); */

//Reasignar una propiedad
persona.edad = 24;
//Asignar una propiedad(en este caso estamos asignando un método)
persona.decirEdad = function () {
  return `Tengo ${this.edad} de edad`;
};

const { rejects } = require('assert');
/* console.log(persona);
console.log(persona.decirEdad());
 */
/* ------------------------------- Dificultad extra --------------------------------------- */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Array para la agenda
let contactos = [
  { nombre: 'Nahuel', telefono: 123456 },
  { nombre: 'Iván', telefono: 1234567 },
  { nombre: 'Albarado', telefono: 12345 },
];

//Creación de la Aplicación de consola
const iniciarApp = () => {
  rl.setPrompt(
    'Bienvenido a la Agenda ¿Qué acción deseas realizar?: \n 1. Ver agenda\n 2. Crear contacto\n 3. Editar contacto\n 4. Eliminar contacto\n Presiona "CTRL + C" para salir de la app',
  );
  rl.prompt();
};
iniciarApp();

rl.on('line', (input) => {
  switch (parseInt(input)) {
    case 1:
      console.log(`Has escogido la opción: ${input}`);
      console.log(contactos);
      setTimeout(iniciarApp, 2000);
      break;
    case 2:
      console.log(`Has escogido la opción: ${input}`);
      addContacto();
      break;
    case 3:
      console.log(`Has escogido la opción: ${input}`);
      editContacto();
      break;
    case 4:
      console.log(`Has escogido la opción: ${input}`);
      destroyContacto();
      break;
    default:
      console.log(`Esa opción NO EXISTE. Por favor ingresar una correcta`);
      setTimeout(iniciarApp, 2000);
      break;
  }
});

/* ---Función para añadir un contacto nuevo--- */
const addContacto = () => {
  const data = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

  const create = async () => {
    let contactoNuevo = {};

    contactoNuevo.nombre = await data('Ingrese el nombre: ');
    let telefono = await data('Ingrese el teléfono: ');
    if (telefono.length >= 11 || isNaN(parseInt(telefono)) === true) {
      console.log(
        'El número de telefono tiene que ser menos de 11 digitos y un dato númerico',
      );
      setTimeout(iniciarApp, 2000);
    } else {
      contactoNuevo.telefono = parseInt(telefono);

      contactos.push(contactoNuevo);

      console.log('Has creado un contacto nuevo');
      setTimeout(iniciarApp, 2000);
    }
  };
  create();
};

/* ---Función para editar un contacto ya existente--- */
const editContacto = () => {
  const data = (question) =>
    new Promise((resolve) => rl.question(question, resolve));
  /* Usaré el metedo array "Splice" para reemplazar el contacto existente pero primero
  debo identificar el indice del elemento para poder reemplazarlo usaré "findIndex" */
  const edit = async () => {
    let nameContact = await data('Colocar el nombre del contacto a editar: ');
    let indexContact = contactos.findIndex((elem) => {
      return elem.nombre == nameContact;
    });

    if (indexContact != -1) {
      let contactoEditado = {};

      contactoEditado.nombre = await data('Editar Nombre: ');
      let telefono = await data('Editar Número: ');
      contactoEditado.telefono = parseInt(telefono);
      if (telefono.length >= 11 || isNaN(parseInt(telefono)) === true) {
        console.log(
          'El número de telefono tiene que ser menos de 11 digitos y un dato númerico',
        );
        setTimeout(iniciarApp, 2000);
      } else {
        contactoEditado.telefono = parseInt(telefono);

        contactos.splice(indexContact, 1, contactoEditado);
        console.log('Se ha editado correctamente el contacto');
        setTimeout(iniciarApp, 2000);
      }
    } else {
      console.log('Ese contacto no existe');
      setTimeout(iniciarApp, 2000);
    }
  };
  edit();
};

const destroyContacto = () => {
  const data = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

  const destroy = async () => {
    let nameContact = await data('Ingresar el nombre del contacto a eliminar: ');
    let indexContact = contactos.findIndex((elem) => {
      return elem.nombre == nameContact;
    });

    if (indexContact != -1) {
      contactos.splice(indexContact, 1);
      console.log('Se ha eliminado correctamente el contacto');
      setTimeout(iniciarApp, 2000);
    } else {
      console.log('Ese contacto no existe');
      setTimeout(iniciarApp, 2000);
    }
  };
  destroy();
};
