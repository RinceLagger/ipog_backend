//datos entrada= [[{ P1: 3 }, { P2: 2 },{P3:3}],{t:2}]
//dimensiones = [{ P1: 3 }, { P2: 2 },{P3:3}]
//t = {t:2}
//combParam = [0, 1, 1]

function combinacionValores(dimensiones, combParam) {
  if (
    (dimensiones.length <= 0) |
    (combParam.length <= 0) |
    (dimensiones.length != combParam.length)
  ) {
    throw new Error("error datos entrada");
    
  } else if (
    dimensiones.filter((value) => Object.values(value)[0] < 2).length > 0
  ) {
    throw new Error("el dominio de todos los parámetros debe ser 2 valores como mínimo");
    
  } else if (combParam.reduce((acc, curr) => acc + curr) < 1) {
    throw new Error("la combinación debe tener, al menos, un parámetro activado");
  } else {
    let indices = combParam.map((value) => (value === 1 ? true : false));//[false, true,true]
    n = indices.reduce((acc, curr) => { // 2
      if (curr) return acc + 1;
      else return acc;
    });
    let combinacion = [];
    let combinaciones = [];
    for (i = 0; i < n; i++) combinacion.push(0); //[0,0] combinacion inicial
    let maxCombinacion = [];

    dimensiones.forEach((value, index) => {
      if (indices[index]) maxCombinacion.push(Object.values(value)[0] - 1); // [1,2] Max comb
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
    //console.log(combinaciones);
    return combinaciones;
  }
  
}

//combinacionValores([{ P1: 3 }, { P2: 2 },{P3:3}], [1, 1, 0]);

module.exports = combinacionValores;
