const express = require('express');
const app = express();

app.use(express.json());

//ROUTE EXPORTS
const product = require("./route/productRoute");

app.use("/rac", product);


module.exports =app;