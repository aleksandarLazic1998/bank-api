import express, { Request, RequestHandler } from "express";
import ROUTES from "../../Routes";
import { createUser, editUser } from "./controller";

const ClientRouter = express.Router();

ClientRouter.post(ROUTES.CLIENT.BASE, createUser);
ClientRouter.put(`${ROUTES.CLIENT.BASE}/:clientId`, editUser);

export default ClientRouter;
