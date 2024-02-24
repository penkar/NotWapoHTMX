const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// const session = require("express-session");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/topic/:topicId", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/article/:articleId", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/manifest.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/manifest.json"));
});
app.get("/app.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/app.css"));
});

app.use(require("./src/routes/articles"));
app.use(require("./src/routes/assets"));
app.use(require("./src/routes/menus"));

app.listen(port, async () => {
  console.log(`Server is running on port: ${port}`);
});
