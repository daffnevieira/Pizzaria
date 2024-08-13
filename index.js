/* eslint-disable linebreak-style */
'use strict'
// require('dotenv').config()

import express from "express";
const app = express();
import router from "./routes/rotas.js";
import dotenv from 'dotenv';
dotenv.config();

app.use("/", express.static("client"), router);


app.listen(process.env.PORT, () => {
	console.log(`Server Running on port:${process.env.PORT}`);
});
