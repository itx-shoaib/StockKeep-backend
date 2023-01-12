const express = require("express");
const dotenv = require("dotenv").config()
const bodyparser = require("body-parser");
const cors = require("cors")

const app = express();

const dbconfig = require('./db')

app.use(express.json())


const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))