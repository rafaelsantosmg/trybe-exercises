const express = require("express");
const ping = require("./middlewares/ping");
const hello = require("./middlewares/hello");
const greetings = require("./middlewares/greeting");
const getSimpsons = require("./middlewares/getSimpsons");
const simpsonId = require("./middlewares/getSimpsonById");
const createSimpson = require("./middlewares/createSimpson");
const validateIdSimpson = require("./middlewares/validateIdSimpson");
const validateNameSimpson = require("./middlewares/validateNameSimpson");

const app = express();

app.use(express.json());

app.get("/ping", ping);

app.post("/hello", hello);

app.post("/greeting", greetings);

app.get("/simpsons", getSimpsons);

app.get("/simpsons/:id", simpsonId);

app.post("/simpsons", validateIdSimpson, validateNameSimpson, createSimpson);

app.listen(3000, () => {
  console.log("App rodando porta 3000");
});
