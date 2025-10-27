const express = require("express");
const connectToMongo = require("./db");
require("dotenv").config();

const app = express();
connectToMongo();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.use("/auth", require("./auth"));

// Render index.ejs on root
app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
