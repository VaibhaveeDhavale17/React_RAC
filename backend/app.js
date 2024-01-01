const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errorMiddleware = require("./middleWare/error");

// Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());




//ROUTE EXPORTS
const product = require("./route/productRoute");
const user = require("./route/userRoute");

app.use("/rac", product);
app.use("/rac", user);



// Middleware for Errors
app.use(errorMiddleware);

module.exports =app;