const { io } = require("socket.io-client");

function generateNumbers() {
  var initial = parseInt(Math.random() * (2000001 - 1000001) + 1000001);
  var n = parseInt(Math.random() * (15000 - 5000) + 5000);

  console.log("numeros gerados: ");
  console.log("numero inicial: " + initial);
  console.log("n: " + n);

  return [initial, n];
}

process;

for (var i = 0; i < 5; i++) {
  const socket_process2 = io("ws://localhost:3000");
  console.log("processo aberto");
  socket_process2.emit("howdy", generateNumbers());
  console.log();
}
// socket_process2.on("hellos", (arg) => {
//   console.log(arg);
// });
