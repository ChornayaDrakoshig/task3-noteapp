const port = 8001;

var server = require("net").createServer();
var io = require("socket.io")(server);

var handleClient = function (socket) {
    var tweet = {user: "nodesource", text: "Hello, world!"};

    // to make things interesting, have it send every second
    var interval = setInterval(function () {
        socket.emit("tweet", tweet);
    }, 1000);

    socket.on("disconnect", function () {
        clearInterval(interval);
    });
};

io.on("connection", handleClient);

server.listen(port);
console.log('listening on port ', port);

