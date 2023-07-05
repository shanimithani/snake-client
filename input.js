const net = require("net");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit(); 
    } else if (data === 'w') {
      conn.write("Move: up"); 
    } else if (data === 'a') {
      conn.write("Move: left"); 
    } else if (data === 's') {
      conn.write("Move: down"); 
    } else if (data === 'd') {
      conn.write("Move: right"); 
    }
    else if (data === 'g') {
      conn.write("Say: GG"); 
    }
  };
  stdin.on("data", handleUserInput); // Added listener
  return stdin;
};

module.exports = {
  setupInput,
};