const express = require("express");

const bodyParser = require("body-parser");

const http = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(process.env.PORT || 2001 , function () {

    console.log("server started at 2001..")

});

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");

});

