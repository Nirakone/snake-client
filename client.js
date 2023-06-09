const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Success! Connected!');
    conn.write("Name: NEO");
    //setInterval(() => (conn.write("Move: up")), 50);

    conn.on("data", (data) =>  {
      console.log(data);
    });
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
//connect();

module.exports = {connect};
