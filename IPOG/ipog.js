const combinacionParametros = require("./combinacionParametros/combinacionParametros");
const combinacionValores = require("./combinacionValores/combinacionValores");
const combinacionesCubiertas = require("./combinacionesCubiertas/combinacionesCubiertas");
const eliminarCubiertas = require("./eliminarCubiertas/eliminarCubiertas");
const readWriteFiles = require("../readWriteFiles/readWriteFiles");

/***Formato de datos**************** 
datos entrada= [[{ P1: 3 }, { P2: 2 },{P3:3}],{t:2}]
dimensiones = [{ P1: 3 }, { P2: 2 },{P3:3}]
t = 2
******************************/

function ipog(juegoPruebasName,dimensiones, t) {
  let numParam = dimensiones.length;

  if (numParam < 1) {
    console.log("como mínimo hace falta un parámetro");
  } else if (!(t > 0) | (t > numParam)) {
    console.log(
      "t ha de ser mayor que 0 y menor o igual que el nº de parámetros "
    );
  } else if (
    dimensiones.filter((value, index) => value[`P${index + 1}`] < 2).length > 0
  ) {
    console.log(
      "el dominio de todos los parámetros debe ser 2 valores como mínimo"
    );
  } else {
    dimensiones.sort(compareParamValues); // [ { P1: 3 }, { P3: 3 }, { P2: 2 } ] ordenamos de mayor a menor
    let parametros = dimensiones.map((value) => Object.keys(value)[0]); // [ 'P1', 'P3', 'P2' ]
    let combParam = [];

    for (let i = 0; i < numParam; i++) {
      //[ 1, 1, 0 ]
      //generamos primera combinacion
      if (i < t) {
        combParam.push(1);
      } else {
        combParam.push(0);
      }
    }

    let juegoPruebas = combinacionValores(dimensiones, combParam);
    // [[ 0, 0 ], [ 0, 1 ],[ 0, 2 ], [ 1, 0 ],[ 1, 1 ], [ 1, 2 ],[ 2, 0 ], [ 2, 1 ],[ 2, 2 ]]
    if (numParam > t) {
      for (let i = t; i < numParam; i++) {
        //pi

        let combParam = combinacionParametros(i + 1, t); // inicial [ [ 0, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 0 ] ]

        let combSoloI = combParam.filter((value, index) => value[i] === 1); // [ [ 0, 1, 1 ], [ 1, 0, 1 ] ]
        combParam = [...combSoloI];
        let pi = [];

        combParam.forEach((value) => {
          pi.push(combinacionValores(dimensiones.slice(0, i + 1), value));
        });

        /*****EXTENSIÓN HORIZONTAL  ****/

        for (let j = 0; j < juegoPruebas.length; j++) {
          //recorremos las filas del juego de pruebas
          let caso = juegoPruebas[j];

          let combCubiertasPi = []; // tantos 0 como dimensiones del parámetro. Vector que indicará cuantos de Pi cubre añadiendo el 0, el 1 y el 2 (si la dimensión fuese x ej 3)

          for (let k = 0; k < Object.values(dimensiones[i])[0]; k++) {
            //inicialmente tendríamos [0,0,0]
            combCubiertasPi.push(0);
          }
          for (let k = 0; k < Object.values(dimensiones[i])[0]; k++) {
            //probamos las combinaciones cubiertas con los distintos valores según la dimensión
            let pruebaCaso = [...caso, k];
            combCubiertasPi[k] = combinacionesCubiertas(
              combParam,
              pi,
              pruebaCaso
            );
            
          }

          let maximo = combCubiertasPi.indexOf(Math.max(...combCubiertasPi));

          caso = [...caso, maximo];
          juegoPruebas[j] = caso;

          pi = eliminarCubiertas(combParam, pi, caso);
        }

        /*****EXTENSIÓN VERTICAL  ****/

        for (let j = 0; j < pi.length; j++) {
          //recorremos las filas de pi correspondientes a las comb de param
          if (pi[j].length) {
            //está pi vacio?
            let combParamPrueba = combParam[j];
            let combValores = pi[j];

            combValores.forEach((valor, index) => {
              //recorremos los pi de cada comb de param
              let encontrado = false;
              let k = 0;

              while (!encontrado && k < juegoPruebas.length) {
                //recorremos el juego de pruebas
                let caso = juegoPruebas[k];
                let seleccionCaso = caso.filter(
                  (valor, index) => combParamPrueba[index] === 1
                );

                if (
                  seleccionCaso.every(
                    (value, index) => (value === valor[index]) | (value === "*")
                  )
                ) {
                  encontrado = true;
                } else {
                  k = k + 1;
                }
              }
              if (encontrado) {
                let m = 0;
                combParamPrueba.forEach((value, index) => {
                  //sustituimos los -1 por lo que necesitamos
                  if (value === 1) {
                    juegoPruebas[k][index] = valor[m];
                    m = m + 1;
                  }
                });
              } else {
                //si no encontramos adecuado, añadimos fila
                let nuevoCaso = [];
                for (let l = 0; l <= i; l++) {
                  //[-1,-1,-1,...]
                  nuevoCaso.push("*");
                }
                let m = 0;
                combParamPrueba.forEach((value, index) => {
                  //sustituimos los -1 por lo que necesitamos
                  if (value === 1) {
                    nuevoCaso[index] = valor[m];
                    m = m + 1;
                  }
                });
                juegoPruebas.push(nuevoCaso);
              }
            });
          }
        }
      }
    }
    let resultado = [dimensiones, juegoPruebas];
    //console.log(resultado);
    readWriteFiles.writeACTSfile(`${juegoPruebasName}`,dimensiones,juegoPruebas);
    return resultado;
  }
}

function compareParamValues(a, b) {
  if (Object.values(a)[0] > Object.values(b)[0]) {
    return -1;
  }
  if (Object.values(a)[0] < Object.values(b)[0]) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

//ipog([ { P1: 3 }, { P3: 3 }, { P2: 2 } ], 2);

//ipog("juegoACTS.txt",[{ P1: 2 }, { P2: 3 }, { P3: 2 }, { P4: 3 }, { P5: 2 }], 2);

module.exports = ipog;
