/* eslint-disable linebreak-style */
import express from "express";
const app = express();
import router from "./routes/rotas.js";
const PORT = 3000;

app.use("/", express.static("client"), router);



app.listen(PORT, () => {
	console.log(`Server Running on port:${PORT}`);
});
