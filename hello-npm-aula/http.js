import { createServer } from "http";

createServer(function (req, res) {
  res.write("Hello world Descomplica!");
  return res.end();
}).listen(8080);
