import { Express, Request, Response } from "express";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const https = require("https");
const http = require("http");
const fs = require("fs");

const app: Express = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: "allow" } ));
// to support JSON-encoded bodies
app.use(bodyParser.json());

// An api endpoint that returns a short list of items
app.get('/api/getList', (req: Request, res: Response) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('/*', (req: Request, res: Response) =>{
    res.sendFile(path.join(__dirname + 'build/index.html'));
});

const port: number = Number(process.env.PORT) || 443;
// app.listen(port);

http.createServer(app).listen(80, () => {console.log("Listening (http)...")});

https.createServer(
    {
        key: fs.readFileSync("/app/build/certs/privkey.pem"),
	cert: fs.readFileSync("/app/build/certs/cert.pem"),
	ca: fs.readFileSync("/app/build/certs/chain.pem")
    },
    app
    ).listen(port, () => {
	console.log("Listening...")
    });

console.log('App is listening on port ' + port);
