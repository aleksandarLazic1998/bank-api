import { Request, Response } from "express";
import { Banker } from "../../Entities/Banker";
import { findItemError } from "../Helpers/findItemError";
import { validateClients } from "../Helpers/validateClients";

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
