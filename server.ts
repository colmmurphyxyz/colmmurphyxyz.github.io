import { Express, Request, Response } from "express";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import https from "https";
import http from "http";
import fs from "fs";

const app: Express = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: "allow" } ));
// to support JSON-encoded bodies
app.use(bodyParser.json());

// Handles any requests that don't match the ones above
app.get('/*', (req: Request, res: Response) =>{
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port: number = Number(process.env.PORT) || 443;

http.createServer(app).listen(80, () => {console.log("Listening (http)...")});

https.createServer(
    {
        key: fs.readFileSync("/app/build/certs/privkey.pem"),
        cert: fs.readFileSync("/app/build/certs/cert.pem"),
        ca: fs.readFileSync("/app/build/certs/chain.pem")
    },
    app ).listen(port, () => {
	        console.log("Listening...")
        }
    );

console.log('App is listening on port ' + port);

