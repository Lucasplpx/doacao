const nunjucks = require("nunjucks");
const express = require("express");
const server = express();

const path = require("path");

const routes = require("./routes");

// Caminhos pastas
const views = path.resolve("src", "pages");
const assets = path.resolve("public");

// Configurar o servidor para apresentar arquivos extras
server.use(express.static(assets));

// Config template engine
nunjucks.configure(views, {
  express: server,
  noCache: true
});

// Parse URL-encoded bodies (as sent by HTML forms)
server.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
server.use(express.json());
// Rotas
server.use(routes);

server.listen(3000, () => {
  console.log("Server is running port 3000");
});
