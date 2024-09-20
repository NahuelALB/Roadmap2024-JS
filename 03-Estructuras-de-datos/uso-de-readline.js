const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('Escribe algo: ');
rl.prompt();

rl.on('line', (input) => {
  console.log(`Has escrito: ${input}`);

  // Mostrar el historial
  console.log('Historial de entradas:', rl.history);

  rl.prompt();
});

/* rl.on('line', (input) => {
  console.log(`Se ingresó: ${input}`);

  if (input === 'pause') {
    console.log('La entrada está pausada');
    rl.pause();
  } else if (input === 'resume') {
    console.log('La entrada está reanudada');
    rl.resume();
  }
}); */

/* //Sirve para poder preguntar si está seguro de salir de la app usando "Ctrl + C"
rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
}); */

/* const leerInput = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (repuesta) => {
      resolve(repuesta);
    });
  });
};

const guardarInput = async () => {
  try {
    let nombre = await leerInput('Como te llamas?');
    console.log(`Hola, ${nombre}`);
    rl.close();
  } catch (error) {
    console.error('Surgió un error: ', error);
  }
};

guardarInput(); */
