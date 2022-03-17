const express = require("express");
/*const res = require("express/lib/response");*/
const app = express();
const path = require("path");

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.listen(3030, () => {
  console.log("Servidor corriendo");
});
