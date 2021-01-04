function helloHandler(request, response) {
  response.writeHead(302, { Location: "/" });
  response.end();
}

module.exports = helloHandler;
