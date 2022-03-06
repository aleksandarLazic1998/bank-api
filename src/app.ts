import express from "express";
import cors from "cors";
import morgan from "morgan";
import ClientRouter from "./Router/Client/router";
import BankerRouter from "./Router/Banker/router";
const app = express();

/* MIDDLEWARES */
app.use(cors({ origin: process.env.CORS_WHITE_LIST }));
app.use(express.json());
app.use(morgan("combined"));

/* ROUTERS */
app.use(ClientRouter);
app.use(BankerRouter);

export default app;
