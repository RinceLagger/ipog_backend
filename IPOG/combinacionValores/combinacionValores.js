//datos entrada= [[{"P1":2},{"P2":3}...],{t:2}]
//dimensiones = [{"P1":2},{"P2":3}...]
//t = {t:2}
//combParam = [0,0,0,1,1]

function combinacionValores(dimensiones, combParam) {
  if (
    (dimensiones.length <= 0) |
    (combParam.length <= 0) |
    (dimensiones.length != combParam.length)
  ) {
    console.log("error datos entrada");
  } else if (
    dimensiones.filter((value, index) => value[`P${index + 1}`] < 2).length > 0
  ) {
    console.log(
      "el dominio de todos los parámetros debe ser 2 valores como mínimo"
    );
  } else if (combParam.reduce((acc, curr) => acc + curr) < 1) {
    console.log("la combinación debe tener, al menos, un parámetro activado");
  } else {
    let indices = combParam.map((value) => (value === 1 ? true : false));
    n = indices.reduce((acc, curr) => {
      if (curr) return acc + 1;
      else return acc;
    });
    let combinacion = [];
    let combinaciones = [];
    for (i = 0; i < n; i++) combinacion.push(0);
    let maxCombinacion = [];

    dimensiones.forEach((value, index) => {
      if (indices[index]) maxCombinacion.push(value[`P${index + 1}`] - 1);
    });
    combinaciones.push(combinacion)
    
    
    while(!combinacion.every((value,index)=>value===maxCombinacion[index])){
        combinacion = [...combinacion];
        let i = n-1;
        while(combinacion[i]===maxCombinacion[i]){
            combinacion[i] =0;
            i = i-1;
        }
        combinacion[i] = combinacion[i] + 1;
        combinaciones.push(combinacion);

    }
    console.log(combinaciones);
    return combinaciones;
  }
  
}

//combinacionValores([{ P1: 3 }, { P2: 2 },{P3:3}], [0, 1, 1]);

module.exports = combinacionValores;
