const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = 5000;
var Number = 0;

function middleware(req, res, next) {
  Number++;
  console.log("Middleware called " + Number + " times");
  next();
}

app.get("/", middleware, (req, res) => {
  const kd = req.query.kd;
  const nm = req.headers.nm;
  const pw = req.headers.pw;

  if (!kd || !nm || !pw) {
    res.status(400).send("Missing query or headers");
    return;
  }
  if (kd > 3 || kd < 1) {
    res.status(400).send("Invalid query or headers");
    return;
  }

  console.log(kd);
  console.log(nm);
  console.log(pw);

  res.send("Received query and headers");
});

app.post("/", (req, res) => {
  const bd = req.body;
  console.log(bd);
  res.json({ message: "Data received", bd });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Something broke!");
});

app.listen(port);
