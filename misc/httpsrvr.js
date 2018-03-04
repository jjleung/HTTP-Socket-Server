const net = require("net");
const PORT = 8080;
// const css = require("./assets.styles.js");
// const index = requre("./assets.index.js");

process.stdin.setEncoding("utf8");

const server = net.createServer();

server.on("connection", socket => {
  const remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
  console.log("you made a connection, yo %s", remoteAddress);

  socket.on("data", data => {
    deets = data.toString();
    console.log("Data from %s: %s", remoteAddress, deets);
  });
});

server.listen(PORT, () => {
  console.log("Server listening to %j", server.address());
});
