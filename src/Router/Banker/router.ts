import express from "express";
import ROUTES from "src/Routes";
import { createBanker, editBanker } from "./controllers";

const BankerRouter = express.Router();

BankerRouter.post(ROUTES.BANKER.BASE, createBanker);
BankerRouter.put(`${ROUTES.BANKER.BASE}/:bankerId`, editBanker);

export default BankerRouter;
