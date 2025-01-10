const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const zod = require("zod");

const port = 4000;
// const schema = zod.number();
const schema = zod.preprocess(
  (val) => parseFloat(val), // Convert string to number
  zod.number() // Validate as a number
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("zod is here");
});

app.post("/", (req, res) => {
  const kd = req.query.kd;
  const reponse = schema.safeParse(kd);
  res.send({
    reponse: reponse,
  });
});

app.listen(port);
