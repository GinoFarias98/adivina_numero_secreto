const readLine = require('readline-sync');
const {generarNumeroAleatorio, verificador} = require('./adivinanza');

const consultarNum = () => {
    const numeroElegido = readLine.question('Ingrese un numero: ');
    return parseInt(numeroElegido, 10);
};

const juegoAdivinanza = () => {

    const numSecreto = generarNumeroAleatorio();
    let numAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

while(numAdivinado !== numSecreto) {
numAdivinado = consultarNum();
verificador(numSecreto, numAdivinado); }
};

juegoAdivinanza();
