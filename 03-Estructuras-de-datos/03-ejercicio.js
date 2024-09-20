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

/* console.log(persona);
console.log(persona.decirEdad());
 */
/* ------------------------------- Dificultad extra --------------------------------------- */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contacts = [
  { nombre: 'Nahuel', telefono: 3885838669 },
  { nombre: 'José', telefono: 15478946 },
];
const agendOfContact = () => {
  const viewUsers = () => {
    contacts.forEach((elem) => {
      console.log(`Contacto ${elem.nombre} - Telefono: ${elem.telefono}`);
    });
  };
  const createUser = () => {
    rl.question('Ingrese su nombre: ', (name) => {
      rl.question('Ingrese su número: ', (cellPhone) => {
        contacts.push({ name, cellPhone });
        console.log('Contacto creado!!');

        rl.setPrompt(
          '¿Que acción deseas realizar? \n 1-Ver Contactos \n 2-Crear Contacto \n 3-Editar Contacto \n 4-Eliminar Contacto \n',
        );
        rl.prompt();
      });
    });
  };
  const editUser = () => {
    console.log('Accediste a 3');
  };
  const deleteUser = () => {
    console.log('Accediste a 4');
  };

  //Solicitar la funcionalidad a realizar
  rl.setPrompt(
    'Bienvenidos a la agenda de contactos :) \n ¿Que acción deseas realizar? \n 1-Ver Contactos \n 2-Crear Contacto \n 3-Editar Contacto \n 4-Eliminar Contacto \n',
  );
  rl.prompt();

  rl.on('line', (input) => {
    switch (parseInt(input)) {
      case 1:
        viewUsers();
        break;
      case 2:
        createUser();
        break;
      case 3:
        editUser();
        break;
      case 4:
        deleteUser();
        break;
      default:
        console.log('Comando no existente :(');
        break;
    }
  });
};

agendOfContact();
