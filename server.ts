import { Express, Request, Response } from "express";
const express = require("express");
const path = require("path");
import https from "https";
import fs from "fs";

const app: Express = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: "allow" } ));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req: Request, res: Response) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req: Request, res: Response) =>{
    res.sendFile(path.join(__dirname + 'build/index.html'));
});

const port: number = Number(process.env.PORT) || 3000;
app.listen(port);

console.log('App is listening on port ' + port);