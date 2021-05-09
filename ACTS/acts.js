
function acts(juegoPruebasName, juegoPruebasNameACTS){

  let exec = require("child_process").exec,
  child;
child = exec(
  `java -jar -Dmode=extend -Doutput=csv -Drandstar=off -Dcheck=on -Ddoi=1 ${__dirname}/acts_cmd_2.92.jar ActsConsoleManager ${__dirname}/../public/${juegoPruebasName} ${__dirname}/../public/${juegoPruebasNameACTS}`,
  function (error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  }
);


}

//acts("juegoACTS.txt", "juegoACTSextend.txt")

module.exports = acts;





