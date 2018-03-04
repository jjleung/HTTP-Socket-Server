const net = require("net");
const { index, css, hydrogen, helium, fourOhFour } = require("./markup");

const server = net.createServer(socket => {
  socket.on("data", data => {
    console.log("From Client: ", data.toString());
    const reqDataArr = data.toString().split("\n");
    const reqLine = reqDataArr[0];
    const reqUrl = reqLine.split(" ")[1];

    if (reqUrl === "/") {
      socket.write(`HTTP/1.1 200 OK\n\n${index}`);
      socket.end();
    } else if (reqUrl === "/css/styles.css") {
      socket.write(`HTTP/1.1 200 OK\n\n${css}`);
      socket.end();
    } else if (reqUrl === "/assets/hydrogen.html") {
      socket.write(`HTTP/1.1 200 OK\n\n${hydrogen}`);
      socket.end();
    } else if (reqUrl === "/assets/helium.html") {
      socket.write(`HTTP/1.1 200 OK\n\n${helium}`);
      socket.end();
    } else {
      socket.write(`HTTP/1.1 200 OK\n\n${fourOhFour}`);
      socket.end();
    }
  });
});

server.listen(8080, () => {
  console.log("Server listening on 8080");
});
