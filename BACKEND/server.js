import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import socketio from "socket.io";
import events from "events";
import path from "path";
import fs from "fs";

import allRoutes from "./src/routes/allroutes";

import allSockets from "./src/io-sockets/allsockets";

import portRoutes from "./src/routes/port";

let app = express();
let server = http.createServer(app);
let port = 8081;

// let locallink = "http://40.88.10.237:3000";
// let locallink = "http://localhost:3000";

app.use(cors());

let corsOptions = {
  body: "*",
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET,PUT,POST,DELETE"
};

// let sslCerticates = {
//   key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
//   requestCert: false,
//   rejectUnauthoried: false
// };

// let sslServer = https.createServer(sslCerticates, app);

app.use(bodyParser.json());

let io = socketio(server, {
  cors: {
    origin: ["http://localhost:3000", "http://192.168.1.194:3000"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

events.EventEmitter.defaultMaxListeners = 6969696969696969696969696969696969696969696969696969;

//========================Routes=========================================

allRoutes(app, corsOptions);

//=========================================================================

//============================Socket======================================

allSockets(io);

//=========================================================================

//============================Port======================================
portRoutes(server, port);
//=========================================================================
