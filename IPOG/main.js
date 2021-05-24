const ipog = require("./ipog");
const readWriteFiles = require("../readWriteFiles/readWriteFiles");

readWriteFiles.readFile("ejemplo.csv").then((res) => {
  const dimensiones = res.split("\r\n");

  const param = dimensiones[0].split(",").map(function (item) {
    return item.trim();
  });
  const dim = dimensiones[1].split(",").map(function (item) {
    return parseInt(item, 10);
  });

  let dimVector = [];
  let t = dim[param.length - 1];

  for (let i = 0; i < param.length - 1; i++) {
    let p = { [`${param[i]}`]: dim[i] };
    dimVector.push(p);
  }

  ipog("juegoPruebasEjemplo.txt", dimVector, t);
});
