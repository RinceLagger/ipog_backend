function combinacionesCubiertas(combParam, pi, caso) {
   let resultado =0;

   for(let i=0;i<combParam.length;i++){
        let combParamPrueba = combParam[i];
        let combValores = pi[i];
        
        let seleccionCaso = caso.filter((valor, index)=> combParamPrueba[index]===1);
        combValores.forEach((valor)=> {
            if(seleccionCaso.every((value,index)=>value===valor[index])){
                resultado++;
            }
        })
   }
   //console.log(resultado);
    return resultado;
    
  }

// let pi = [[[ 0, 0 ], [ 0, 1 ], [ 1, 0 ],[ 1, 1 ], [ 2, 0 ], [ 2, 1 ]], [[ 0, 0 ], [ 0, 1 ], [ 1, 0 ],[ 1, 1 ], [ 2, 0 ], [ 2, 1 ]]];
  
// combinacionesCubiertas([ [ 0, 1, 1 ], [ 1, 0, 1 ] ],pi,[0,0,0] );
  
  module.exports = combinacionesCubiertas;
  