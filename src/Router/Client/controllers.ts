import { Request, Response } from "express";
import { createQueryBuilder } from "typeorm";
import { Client } from "../../Entities/Client";
import { findItemError } from "../Helpers/findItemError";
import { validateClients } from "../Helpers/validateClients";

export async function createUser(req: Request, res: Response) {
	const {
		first_name: firstName,
		last_name: lastName,
		email,
		card_number: cardNumber,
	} = req.body;

	if (!email || !cardNumber) {
		const validationPayload = { res, email, cardNumber };
		validateClients(validationPayload);
	} else {
		const client = Client.create({
			first_name: firstName,
			last_name: lastName,
			email,
			card_number: cardNumber,
		});

		try {
			await client.save();
			return res.json(client);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}

export async function editUser(req: Request, res: Response) {
	const { clientId } = req.params;
	const client = await Client.findOne(+clientId);

	if (!client) return findItemError(clientId, "Client");
	else {
		Client.merge(client, req.body);

		try {
			const response = await Client.save(client);
			return res.status(200).json(response);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}

export async function getAllClients(req: Request, res: Response) {
	const clients = await createQueryBuilder("client")
		.select("client")
		.from(Client, "client")
		.getMany();
	return res.status(200).json(clients);
}
export async function getClient(req: Request, res: Response) {
	const { clientId } = req.params;
	const client = await createQueryBuilder("client")
		.select("client")
		.from(Client, "client")
		.where("client.id = :clientId", { clientId: +clientId })
		.getOne();

	let statusCode = 404;
	let payload: { msg: string } | Client = {
		msg: `Client With id:${clientId} Not Found`,
	};

	if (client) {
		statusCode = 200;
		payload = client;
	}

	return res.status(statusCode).json(payload);
}
