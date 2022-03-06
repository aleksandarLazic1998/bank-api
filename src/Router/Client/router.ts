import express, { Request, RequestHandler } from "express";
import ROUTES from "../../Routes";
import { createUser } from "./controller";

const ClientRouter = express.Router();

ClientRouter.post(ROUTES.CLIENT.BASE, createUser);

export default ClientRouter;
