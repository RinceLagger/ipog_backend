function combinacionParametros(m, n) {
  let combinacion = [];
  let combinaciones = [];
  let fin = false;
  let encontrado = false;
  if ((m <= 0) | (n <= 0) | (n > m)) {
    console.log("m, n > 0 y m >= n");
  } else {
    for (let i = 0; i < m; i++) {
      //generamos primera combinacion
      if (i < m - n ) {
        combinacion.push(0);
      } else {
        combinacion.push(1);
      }
    }
  }

  combinaciones.push(combinacion);

  let g;
  while (!fin) {
    combinacion = [...combinacion];
    g = m - 2;
    encontrado = false;
    while (!encontrado & (g >= 0)) {
      if (combinacion[g] === 0 && combinacion[g + 1] === 1) {
        encontrado = true;
      } else {
        g--;
      }
    }

    if (combinacion[m - 1] === 1) {
      combinacion[g] = 1;
      combinacion[g + 1] = 0;
    } else {
      let r = 0;
      for (let i = 0; i <= g; i++) {
        r += combinacion[i];
      }

      combinacion[g] = 1;
      let ultimosUnos = n - r - 1;

      for (i = g + 1; i < m - ultimosUnos; i++) {
        combinacion[i] = 0;
      }
      if (ultimosUnos > 0) {
        for (let i = m - ultimosUnos; i < m; i++) {
          combinacion[i] = 1;
        }
      }
    }
    if (encontrado) {
      combinaciones.push(combinacion);
    } else {
      fin = true;
      //console.log(combinaciones);
      return combinaciones;
    }
  }
}

//combinacionParametros(5, 2);

module.exports = combinacionParametros;
