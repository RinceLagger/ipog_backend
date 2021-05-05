let fs = require("fs");

function readFile(fileName) {
  return fs.promises.readFile(__dirname + `/../public/${fileName}`, "utf8");
}

//readFile("ejemplo.csv");

function writeFile(fileName, input) {
  let logger = fs.createWriteStream(__dirname + `/../public/${fileName}`, {
    flags: "a", // 'a' means appending (old data will be preserved)
  });

  input.forEach((line) => logger.write(line+"\n"));
}

input = readFile("juego_pruebas_propio.txt")
  .then((res) => res.split("\r\n")).then(res=> {console.log(res)
    writeFile("pruebaEscritura",res);})
  .catch((err) => console.log(err));


