"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var https = require("https");
var http = require("http");
var fs = require("fs");

var app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: "allow" }));

// to support JSON-encoded bodies
app.use(bodyParser.json());

// Handles any requests that don't match the ones above
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

var port = Number(process.env.PORT) || 443;
http.createServer(app).listen(80, () => {
    console.log("Listening (http)..."); 
});
https.createServer({
    key: fs.readFileSync("/app/build/certs/privkey.pem"),
    cert: fs.readFileSync("/app/build/certs/cert.pem"),
    ca: fs.readFileSync("/app/build/certs/chain.pem")
}, app).listen(port, () =>  {
    console.log("Listening...");
});
console.log('App is listening on port ' + port);
