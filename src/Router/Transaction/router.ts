import express from "express";
import ROUTES from "../../Routes";
import { createTransaction } from "./controller";

export const TransactionRouter = express.Router();

TransactionRouter.post(
	`${ROUTES.TRANSACTION.BASE}/:clientId`,
	createTransaction
);
