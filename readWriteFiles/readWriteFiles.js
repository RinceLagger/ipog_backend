let fs = require("fs");
const checkTime = 1000; //esperamos 1 segundo a que se genere el archivo por parte de ACTS antes de leerlo

function readFile(fileName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      file = fs.promises.readFile(__dirname + `/../public/${fileName}`, "utf8");
      resolve(file);
    }, 2000);
  });
}

function writeFile(fileName, input) {
  let logger = fs.createWriteStream(__dirname + `/../public/${fileName}`, {
    flags: "a", // 'a' means appending (old data will be preserved)
  });

  input.forEach((line) => logger.write(line + "\n"));
}

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
      logger.write(`${Object.keys(dimensiones[i])[0]} \n`);
    } else {
      logger.write(`${Object.keys(dimensiones[i])[0]} ,`);
    }
  }
  juegoPruebas.forEach((linea) => {
    logger.write(linea.toString() + "\n");
  });
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
exports.readFile = readFile;
