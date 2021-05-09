let fs = require("fs");

function readFile(fileName) {
  return fs.promises.readFile(__dirname + `/../public/${fileName}`, "utf8");
}

//readFile("ejemplo.csv");

function writeFile(fileName, input) {
  let logger = fs.createWriteStream(__dirname + `/../public/${fileName}`, {
    flags: "a", // 'a' means appending (old data will be preserved)
  });

  input.forEach((line) => logger.write(line + "\n"));
}

// input = readFile("juego_pruebas_propio.txt")
//   .then((res) => res.split("\r\n")).then(res=> {console.log(res)
//     writeFile("pruebaEscritura",res);})
//   .catch((err) => console.log(err));

function writeACTSfile(fileName, dimensiones, juegoPruebas) {
  let logger = fs.createWriteStream(__dirname + `/../public/${fileName}`, {
    flags: "a", // 'a' means appending (old data will be preserved)
  });

  logger.write("[Parameter]\n");

  dimensiones.forEach((dim) => {
    logger.write(formatoACTSdimension(dim));
  });

  logger.write("\n");
  logger.write("[Test Set]\n");

  for (let i = 0; i < dimensiones.length; i++) {
    if (i === dimensiones.length - 1) {
      logger.write(`${Object.keys(dimensiones[i])[0]} `);
    } else {
      logger.write(`${Object.keys(dimensiones[i])[0]} ,`);
    }
  }
  
  

}



function formatoACTSdimension(dimension) {
  let paramName = Object.keys(dimension)[0];
  let paramDim = Object.values(dimension)[0];
  let dimensiones = "";

  for (let i = 0; i < paramDim; i++) {
    if (i === paramDim - 1) {
      dimensiones += `${i} `;
    } else {
      dimensiones += `${i} ,`;
    }
  }

  dimension += "/n";

  return `${paramName} (int) : ${dimensiones} \n`;
}

//exports.formatoACTSdimension = formatoACTSdimension;
exports.writeACTSfile = writeACTSfile;
