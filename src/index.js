const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8001;
app.get("/home", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
