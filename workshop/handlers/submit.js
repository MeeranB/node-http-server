function submitHandler(request, response) {
  let body = "";
  request.on("data", chunk => {
    body += chunk;
  });
  request.on("end", () => {
    console.log(body);
    const data = new URLSearchParams(body);
    const name = data.get("name");
    console.log(name);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<h1>Thank you for submitting ${name}</h1>`);
  });
  request.on("error", error => {
    console.log(error);
  });
}

module.exports = submitHandler;
