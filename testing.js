const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5173;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hellooooooooooooooo nodemon");
});
app.post("/", function (req, res) {
  console.log(req.body);

  const msg = req.query.msg;
  console.log(msg);
  res.json({ message: "data posted" });
});

app.get("/test", function (req, res) {
  res.send("test");
});
app.get("/dataa", (req, res) => {
  const name = req.query.name; // Extract data from query parameters
  res.json({ message: `Hello, ${name}` });
});
app.post("/submit", (req, res) => {
  const data = req.body; // Extract data from the request body
  res.json({ message: "Data received", data });
  console.log(data);
});

app.get("/data", function (req, res) {
  res.json({ message: "Data received" });
});

app.listen(port, () => {
  console.log("Server is running on port 5173");
});
