const http = require("http");
const PORT = 3000;
const router = require("./router.js");

const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`listening on https://localhost:${PORT}`)
);
