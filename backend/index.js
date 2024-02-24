import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import Router from './routes/routes.js'
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json())
app.use("/", Router);
app.use(cors())

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
connection(username, password);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});