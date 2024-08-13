"use strict";

import express from "express";
var app = express();
import router from "./routes/rotas";
var PORT = 3000;

app.use("/", express["static"]("client"), router);

var PORT = 5500;

app.listen(PORT, function () {
	console.log("Server Running on port:".concat(PORT));
});