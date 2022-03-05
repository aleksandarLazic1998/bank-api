import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

/* MIDDLEWARES */
app.use(cors({ origin: process.env.CORS_WHITE_LIST }));
app.use(json());
app.use(morgan("combined"));

export default app;