const express = require("express");
const cors = require("cors");
const app = express();
const connectToMongo = require("./db");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
connectToMongo();

app.get("/", (req, res) => {
  res.send("Welcome To Server Page");
});

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
