const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const mocksNews = require("./mocks/news.json");
const newsRouter = require("./routes/news");

mongoose.connect('mongodb://localhost/news', { useNewUrlParser: true });

const app = express();

// const logStream = fs.createWriteStream(
//   path.join(__dirname, "logs/access.log"),
//   { flags: "a" }
// );

app.use(morgan('dev'));
// app.use(morgan(':method :url :date[clf]', { stream: logStream }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use("/news", newsRouter);

app.use((req, res) => res.send(mocksNews));


app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
