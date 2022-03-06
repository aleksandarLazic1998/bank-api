import { Request, Response } from "express";
import { Client } from "../../Entities/Client";
import { Banker } from "../../Entities/Banker";
import { findItemError } from "../Helpers/findItemError";
import { validateClients } from "../Helpers/validateClients";

export async function createBanker(req: Request, res: Response) {
	const {
		first_name: firstName,
		last_name: lastName,
		email,
		employee_number,
		card_number,
	} = req.body;

	if (!email) {
		const validationPayload = { res, email };
		validateClients(validationPayload);
	} else {
		const banker = Banker.create({
			first_name: firstName,
			last_name: lastName,
			email,
			employee_number,
			card_number,
		});

		try {
			await banker.save();
			return res.json(banker);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}

export async function editBanker(req: Request, res: Response) {
	const { bankerId } = req.params;
	const banker = await Banker.findOne(+bankerId);

	if (!banker) return findItemError(bankerId, "Banker");
	else {
		await Banker.merge(banker, req.body);

		try {
			const response = Banker.save(banker);
		} catch (error) {
			res.status(400).json({ msg: "Editing Banker was not possible" });
		}
	}
}

export async function connectClientBanker(req: Request, res: Response) {
	const { bankerId, clientId } = req.params;

	const client = await Client.findOne(+clientId);
	const banker = await Banker.findOne(+bankerId);

	console.log({ banker, client });

	if (!client && !banker)
		return res
			.status(400)
			.json({ msg: "You must enter bankerId and clientId to connect them." });
	else if (!client) return findItemError(clientId, "Client");
	else if (!banker) return findItemError(bankerId, "Banker");
	else {
		banker.clients = [client];
		await banker.save();

		return res
			.status(200)
			.json({ msg: "Banker and Client Succesfully Connected", banker });
	}
}
