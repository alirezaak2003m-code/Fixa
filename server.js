const http = require("http");

const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Server is running 🚀");
}).listen(port, () => {
  console.log("Server started on port " + port);
});
