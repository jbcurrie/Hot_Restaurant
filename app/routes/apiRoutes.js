var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var reservation = require("../data/tableLink.js");
var waitList = require("../data/waitList.js");

var app = express();

module.exports = function(app) {    

    app.get("/api/tableLink", function(req, res) {
        // var chosen = req.params.tableLink;
        // //do we need to remove spaces for 'name' with a regex expression like 
        //     // app.post("/api/new", function(req, res) {
        //     //     var newcharacter = req.body;
        //     //     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        
        // if (chosen) {
        // console.log(chosen);
    
        // for (var i = 0; i < tableLink.length; i++) {
        //     if (chosen === tableLink[i].name) {
        res.json(reservation);
        //     }
        // }
        // return res.json(false);
        // }
        // return res.json(tableLink);
    });

    app.post("/api/new", function(req,res){
        
        
        reservation.push(req.body)
        res.json(reservation);
    })
}

