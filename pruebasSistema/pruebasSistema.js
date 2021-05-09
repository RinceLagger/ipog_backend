const ipog = require("../IPOG/ipog");
const acts = require("../ACTS/acts");
const readWriteFiles = require("../readWriteFiles/readWriteFiles");

const NUMBER_OF_TESTS = 10;
const MAX_PARAMETROS = 6;
const MAX_DIMENSION = 4;
const MAX_T = 3;

async function pruebaSistema() {
  for (let i = 0; i < NUMBER_OF_TESTS; i++) {
    let juegoIpogPropio = "juegoIpogPropio" + i + ".txt";

    let juegoIpogACTS = "juegoIpogACTS" + i + ".txt";

    let numParam = Math.floor(Math.random() * (MAX_PARAMETROS - 1)) + 1;

    let dimensiones = generateDimensiones(numParam);

    let t = Math.floor(Math.random() * (numParam - 1)) + 1;

    if (t > MAX_T) t = MAX_T;

    let resultadoIPOG = ipog(juegoIpogPropio, dimensiones, t);
    let numPruebasIPOG = resultadoIPOG[1].length;
    acts(juegoIpogPropio, juegoIpogACTS);

    input = await readWriteFiles.readFile(juegoIpogACTS); 

    let arrayInput = input.split("\n");
    let numPruebasACTS = parseInt(
      arrayInput[6].slice(28, arrayInput[6].length + 1),
      10
    );

    if (numPruebasIPOG === numPruebasACTS) {
      console.log("test superado!!!");
    } else {
      console.log("test fallido :(");
    }
  }
}

function generateDimension() {
  return Math.floor(Math.random() * (MAX_DIMENSION - 1)) + 2;
}

function generateDimensiones(numParam) {
  let dimensiones = [];

  for (let i = 1; i <= numParam; i++) {
    let p = { [`P${i}`]: generateDimension() };
    dimensiones.push(p);
  }

  return dimensiones;
}

pruebaSistema();
