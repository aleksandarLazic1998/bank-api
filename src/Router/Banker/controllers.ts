import { Request, Response } from "express";
import { Banker } from "src/entities/Banker";
import { validateClients } from "../Client/Helpers/validateClients";

export async function createBanker(req: Request, res: Response) {
	const { first_name: firstName, last_name: lastName, email } = req.body;

	if (!email) {
		const validationPayload = { res, email };
		validateClients(validationPayload);
	} else {
		const banker = Banker.create({
			first_name: firstName,
			last_name: lastName,
			email,
		});

		try {
			await banker.save();
			return res.json(banker);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}
