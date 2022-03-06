import express from "express";
import ROUTES from "../../Routes";
import { createBanker, editBanker, connectClientBanker } from "./controllers";

const BankerRouter = express.Router();

BankerRouter.post(ROUTES.BANKER.BASE, createBanker);
BankerRouter.put(`${ROUTES.BANKER.BASE}/:bankerId`, editBanker);
BankerRouter.put(
	`${ROUTES.BANKER.BASE}/:bankerId/client/:clientId`,
	connectClientBanker
);

export default BankerRouter;
