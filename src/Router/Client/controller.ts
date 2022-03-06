import { Request, Response } from "express";
import { Client } from "../../Entities/Client";

export async function createUser(req: Request, res: Response) {
	const {
		first_name: firstName,
		last_name: lastName,
		email,
		card_number: cardNumber,
	} = req.body;

	let validationPayload = "User must add ";
	if (!email) {
		return res.status(400).json({ msg: (validationPayload += "email") });
	} else if (!cardNumber) {
		return res.status(400).json({ msg: (validationPayload += "card number") });
	}

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
