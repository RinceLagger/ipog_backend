const combinacionParametros = require("./combinacionParametros/combinacionParametros");
const combinacionValores = require("./combinacionValores/combinacionValores")


//datos entrada= [[{ P1: 3 }, { P2: 2 },{P3:3}],{t:2}]
//dimensiones = [{ P1: 3 }, { P2: 2 },{P3:3}]
//t = {t:2}
//combParam = [0, 1, 1]



function ipog(dimensiones, t) {

    let numParam = dimensiones.length;

    if(numParam<1){
        console.log("como mínimo hace falta un parámetro");
    }else if( !(t > 0) | (t>numParam)){
        console.log("t ha de ser mayor que 0 y menor o igual que el nº de parámetros ");
    }else if(dimensiones.filter((value, index) => value[`P${index + 1}`] < 2).length > 0){
        console.log("el dominio de todos los parámetros debe ser 2 valores como mínimo");
    }else{

        dimensiones.sort(compareParamValues);// [ { P1: 3 }, { P3: 3 }, { P2: 2 } ]
        let parametros = dimensiones.map(value =>Object.keys(value)[0] ); // [ 'P1', 'P3', 'P2' ]
        let combParam = [];
        
        for (i = 0; i < numParam; i++) { //[ 1, 1, 0 ]
            //generamos primera combinacion
            if (i < t) {
                combParam.push(1);
            } else {
                combParam.push(0);
            }
          }

          //console.log(dimensiones, combParam)
          let juegoPruebas = combinacionValores(dimensiones,combParam);


        console.log(juegoPruebas)


    }



}

function compareParamValues(a, b) {
    if (Object.values(a)[0]>Object.values(b)[0]) {
      return -1;
    }
    if (Object.values(a)[0]<Object.values(b)[0]) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }

  ipog([{ P1: 3 }, { P2: 2 },{P3:3}], 2);

module.exports = ipog;





