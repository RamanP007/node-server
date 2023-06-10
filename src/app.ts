import "dotenv/config";
import express, { Application } from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { Auth } from "./Components";

const app: Application = express();

/* Parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

/* Parse application/json */
app.use(bodyParser.json());

/* Serve static files */
app.use(express.static("public"));
app.use(express.static("uploads"));

/* Enable cors */
app.use(cors("*"));

app.use("/auth", Auth.router);

const port = process.env.PORT;

/* Global root dir */
globalThis.ROOT_DIR = path.resolve(__dirname);


app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
