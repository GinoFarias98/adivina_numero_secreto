const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificador = (numSecreto, numAdivinado) => {
  if (numSecreto === numAdivinado) {
    console.log("Felicidades, adivinaste el numero");
  } 
  else if (numSecreto < numAdivinado) {
    console.log("El numero secreto es menor");
  }
   else 
  {
    console.log("El numero secreto es mayor");
  }
};

module.exports = { generarNumeroAleatorio, verificador };
