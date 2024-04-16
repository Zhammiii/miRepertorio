import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

export { app, PORT }; 