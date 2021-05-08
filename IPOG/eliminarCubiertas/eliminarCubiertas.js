function eliminarCubiertas(combParam, pi, caso) {
  

  for (let i = 0; i < combParam.length; i++) {
    let combParamPrueba = combParam[i]; //  [ 0, 1, 1 ]
    let combValores = pi[i]; // [[ 0, 0 ], [ 0, 1 ], [ 1, 0 ],[ 1, 1 ], [ 2, 0 ], [ 2, 1 ]]
    let seleccionCaso = caso.filter(
      (valor, index) => combParamPrueba[index] === 1
    ); // [0,0]
    let juegoBorrar = [];
    combValores.forEach((valor) => {
      if (seleccionCaso.every((value, index) => value === valor[index])) {
        juegoBorrar.push(valor);
      }
    });

    juegoBorrar.forEach((juego) => {
      for (let j = 0; j < pi[i].length; j++) {
        if (pi[i][j].every((value, index) => value === juego[index])) {
          pi[i].splice(j, 1); //eliminamos juegos coincidentes
        }
      }
    });
  }
  return pi;
}

//    let pi = [[[ 0, 0 ], [ 0, 1 ], [ 1, 0 ],[ 1, 1 ], [ 2, 0 ], [ 2, 1 ]], [[ 0, 0 ], [ 0, 1 ], [ 1, 0 ],[ 1, 1 ], [ 2, 0 ], [ 2, 1 ]]];

//    eliminarCubiertas([ [ 0, 1, 1 ], [ 1, 0, 1 ] ],pi,[0,0,0] );

module.exports = eliminarCubiertas;
