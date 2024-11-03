/* ---Creación de cadenas de carácteres--- */
const string1 = 'Una cadena primitiva';
let string2 = 'Otra cadena primitiva';

const string3 = new String('Un Objeto string');

//Acceder a un caracter (Hay 2 formas)
const gato = 'cat';
gato.charAt(1); //devuelve "a"
gato[1]; //devuelve también "a"

//Comparar cadenas con operadores "Mayor que","Menor que", etc
let a = 'a';
let b = 'b';
if (a < b) {
  //true
  console.log(`${a} es menor que ${b}`);
} else {
  console.log(`${a} y ${b} son iguales`);
}

//Las primitivas y los objetos string dan diferente resultado cuando se usa "eval()"
let s1 = '2 + 2';
let s2 = new String('2 + 2');
eval(s1); //Devuelve el numero "4"
eval(s2); //Devuelve "[String: '2 + 2']"

//Cuando tienes cadenas largas puedes concatenarlas colocando "\" al final sin dejar ni un espacio
let longString =
  'Esta es una cadena muy larga que necesita \
dividirse en varias lineas porque \
de lo contrario, mi codigo es ilegible';

/* -----MÉTODOS ESTÁTICOS----- */
/* Método String.fromCharCode */
//método estático que devuelve una cadena creada mediante el uso de
//una secuencia de valores Unicode especificada.
String.fromCharCode(65, 66, 67);

/* -----PROPIEDADES DE LA INSTANCIA----- */
/* String.prototype.length */
//Refleja la "length" de la cadena. Solo lectura
let largo = 'Nahuel';
largo.length; //Devuelve el numero "6" porque esos caracteres contiene la cadena

/* -----MÉTODOS DE INSTANCIA----- */
/* String.Concat() */
//Combina 1 o más cadenas de texto y devuelve una cadena de texto nueva
const cadena1 = 'Hola';
const cadena2 = 'Mundo';
cadena1.concat(' ', cadena2); //Devuelve "Hola Mundo"
cadena1.concat('_', cadena2); //Devuelve "Hola_Mundo"

/* String.includes() */
//Determina si una cadena de texto puede ser encontrada dentro de otra cadena de
//texto, devolviendo "true" o "false"
const sentence = 'Al que madruga dios lo ayuda';
const word = 'dios';
sentence.includes(word); //Devuelve "true"

/* String.endsWith() */
//Determina si una cadena termina con los caracteres de una cadena indicada,
//Devolviendo "true" o "false"
const cadena3 = 'El perro es el mejor amigo del hombre!';
cadena3.endsWith('hombre'); //Devuelve "false"
cadena3.endsWith('bre!'); //Devuelve "true"

/* String.indexOf() */
//Devuelve el índice, si no lo encuentra devuelve "-1"
'Lapiz Lazulí'.indexOf('Lapiz'); //Devuelve "0"
//El segundo parámetro indica desde que indice comienza a buscar
'Lapiz Lazulí'.indexOf('Lapiz', 5); //Devuelve "-1"

/* String.lastIndexOf() */
//Devuelve la posición(indice) de la ultima ocurrencia del valor especificado
//Si no devuelve "-1" si no se halla
'esternocledomastoideo'.lastIndexOf('e'); //Devuelve "19"
'esternocledomastoideo'.lastIndexOf('e', 8); //Devuelve "3"

/* String.localCompare() */
//Devuelve un numero indicando si una cadena de caracteres de referencia va
//antes(num negativo), despues(nun positivo) o si es la misma que la cadena dada
//en orden alfabético(0)

// Alfabéticamente la palabra "check" va después que "against" por lo que resulta
// en un valor positivo.
'check'.localeCompare('against'); // 2 o 1 (u otro valor positivo)

/* String.padEnd() */
//Rellena la cadena actual desde el final con una cadena dada y devuelve una
//nueva cadena de longitud
const cadena4 = 'Eskereee';
cadena4.padEnd(13, '-'); //Devuelve "Eskereee-----"

/* String.padStart() */
//Rellena la cadena actual desde el principio con una cadena dada y devuelve una nueva cadena
const cadena5 = 'Web';
cadena5.padStart(10, 'Bew'); //Devuelve "BewBewBWeb"

/* String.repeat() */
//Construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena
//en la cual fue llamada, concatenados
'123-'.repeat(3); //Devuelve "123-123-123-"

/* String.replace() */
//Devuelve una cadena con una, algunas, o todas las coincidencias de un patrón, siendo cada una de
//estas coincidencias reemplazadas por un reemplazo. Si el patrón es una cadena sólo la primera coin-
//cidencia será reemplazada. La cadena original permanecerá inalterada
const paragraph = 'Robaré los necesarios para salvar esta compañia';
paragraph.replace('salvar', 'restaurar');
//Devuelve "Robaré los necesarios para restaurar esta compañia"

/* String.replaceAll() */
//Lo mismo que la anterior, solo que en este caso reemplaza todas las coincidencias y no solo la primera
const paragraph2 = 'El gato de Lucas es más arisco que el gato de Carla';
paragraph2.replaceAll('gato', 'elefante');
//Devuelve "El elefante de Lucas es más arisco que el elefante de Carla"

/* String.slice() */
//Extrae una sección de una cadena y devuelve una cadena nueva (El segundo parametro es opcional)
let cadena6 = 'La mañana se nos echa encima.';
let cadena7 = cadena6.slice(3, -2);
cadena7; //Devuelve "mañana se nos echa encim"

/* String.split() */
//Divide un string en un array de cadenas mediante la separación de la cadena en subcadenas
let cadena8 = 'perejil comí perejil cené comí tanto perejil que me emperejilé';
cadena8.split(' ');
//Devuelve ['perejil','comí','perejil','cené','comí','tanto','perejil','que','me','emperejilé']

/* String.startWith() */
//Indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta
//devolviendo "true" o "false" según corresponda (el segundo parámetro indica desde que indice comienza)
let cadena9 = 'Noches felices, mañanas tristes';
cadena9.startsWith('No'); //Devuelve "true"
cadena9.startsWith('No', 2); //Devuelve "false"

/* String.substring() */
//Extrae caracteres desde un "indice-A" hasta un "indice-B" este ultimo no se inclue
let cadena10 = 'Fortnite';
cadena10.substring(0, 4); //Devuelve "Fort"
cadena10.substring(4, 7); //Devuelve "nit"

/* String.toLowerCase() */
//Devuelve el string convertido en lower case (o sea todo en minusculas)
const oracion = 'EscRIBo re MaL';
oracion.toLowerCase(); //Devuelve "escribo re mal"

/* String.toUpperCase() */
//Devuelve el string convertido en upper case (o sea todo en MAYUSCULAS)
const oracion2 = 'estoy gritando de furia!!';
oracion2.toUpperCase(); //Devuelve "ESTOY GRITANDO DE FURIA!!"

/* String.trim* */
//Devuelve una nueva cadena sin espacios en blanco desde el inicio y final de la cadena
const oracion3 = '        Hola criaturitas del señor       ';
oracion3.trim(); //Devuelve "Hola criaturitas del señor"

/* String.trimEnd() */
//Realiza lo mismo que el anterior método solo que no deja espacios blancos al final de la cadena
oracion3.trimEnd(); //Devuelve "        Hola criaturitas del señor"

/* String.trimStart() */
//Realiza lo mismo que el anterior método solo que no deja espacios blancos al inicio de la cadena
oracion3.trimStart(); //Devuelve "Hola criaturitas del señor       "

/* -----------------DIFICULTAD EXTRA----------------- */
