/* eslint-disable linebreak-style */
'use strict'

import express from "express";
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import router from "./routes/rotas.js";
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT, () => {
	console.log(`Server Running on port:${process.env.PORT}`);
});
