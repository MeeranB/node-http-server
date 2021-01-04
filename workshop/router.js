const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const helloHandler = require("./handlers/hello");
const miscHandler = require("./handlers/misc");
const submitHandler = require("./handlers/submit");

function router(request, response) {
  if (request.url === "/") {
    homeHandler(request, response);
  } else if (request.url === "/goodbye") {
    goodbyeHandler(request, response);
  } else if (request.url === "/hello") {
    helloHandler(request, response);
  } else if (request.method === "POST" && request.url === "/submit") {
    submitHandler(request, response);
  } else {
    miscHandler(request, response);
  }
}

module.exports = router;
