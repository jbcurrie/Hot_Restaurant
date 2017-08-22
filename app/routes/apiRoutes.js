var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var reservation = require("../data/tableLink.js");
var backup = require("../data/waitlist.js");

var app = express();

module.exports = function(app) {    

    app.get("/api/tableLink", function(req, res) {

        res.json(reservation);

    });

    app.get("/api/waitlist", function(req, res) {

        res.json(backup);

    });

    app.post("/api/new", function(req,res){
        
        if (reservation.length < 5) {
            reservation.push(req.body)
            // res.json(reservation);
            return res.json(true);
        }  else {
            backup.push(req.body)
            // res.json(backup)
            return res.json(false);
        }

    })

    app.post("/api/clear", function(){
        reservation = [];
        backup = [];

        console.log(reservation);
        console.log(backup);
    })
}

