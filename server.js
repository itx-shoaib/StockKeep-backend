const express = require("express");
const dotenv = require("dotenv").config()
const bodyparser = require("body-parser");
const cors = require("cors")

const app = express();

const dbconfig = require('./db')

// Middlewear
app.use(express.json())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))