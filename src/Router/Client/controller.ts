import { Request, Response } from "express";
import { Client } from "../../Entities/Client";
import { validateClients } from "./Helpers/validateClients";

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

	if (!client) {
		return res
			.status(400)
			.json({ msg: `Client with id:${clientId} does not exist` });
	} else {
		Client.merge(client, req.body);

		try {
			const response = await Client.save(client);
			return res.status(200).json(response);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}
