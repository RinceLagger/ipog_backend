let exec = require("child_process").exec,
  child;
child = exec(
  `java -jar -Dmode=extend -Doutput=csv -Drandstar=off -Dcheck=on -Ddoi=1 ${__dirname}/acts_cmd_2.92.jar ActsConsoleManager ${__dirname}/juegoACTS.txt ${__dirname}/juego_ACTS_extend.txt`,
  function (error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  }
);


