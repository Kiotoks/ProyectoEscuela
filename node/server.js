const express = require('express');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3030;
const ejs = require('ejs');
require('dotenv').config();

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});