const express = require("express");
const app = express();
const port = 5173;

app.get("/", function (req, res) {
  res.send("hellooooooooooooooo");
});
app.post("/", function (req, res) {
  res.send("<b> fijism</b>");
});

app.get("/test", function (req, res) {
  res.send("test");
});
app.get("/data", function (req, res) {
  res.json({ message: "Data received" });
});

app.listen(port, () => {
  console.log("Server is running on port 5173");
});
