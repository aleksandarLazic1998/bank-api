import express, { Request, RequestHandler } from "express";
import ROUTES from "../../Routes";
import { createUser, editUser, getAllClients, getClient } from "./controllers";

const ClientRouter = express.Router();

ClientRouter.post(ROUTES.CLIENT.BASE, createUser);
ClientRouter.put(`${ROUTES.CLIENT.BASE}/:clientId`, editUser);
ClientRouter.get(ROUTES.CLIENT.BASE, getAllClients);
ClientRouter.get(`${ROUTES.CLIENT.BASE}/:clientId`, getClient);

export default ClientRouter;
