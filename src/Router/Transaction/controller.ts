import { Request, Response } from "express";
import { TransactionActions } from "../../typescript/TransactionActions";
import { Client } from "../../Entities/Client";
import { Transaction } from "../../Entities/Transaction";
import { findItemError } from "../Helpers/findItemError";

export async function createTransaction(req: Request, res: Response) {
	const { clientId } = req.params;
	const { amount, type } = req.body;

	const client = await Client.findOne(+clientId);

	if (!client) return findItemError(clientId, "Client");
	else {
		const transaction = Transaction.create({ amount, type, client });
		await transaction.save();
		if (type === TransactionActions["DEPOSIT"]) {
			client.balance += amount;
		} else if (type === TransactionActions["WITHDRAWAL"]) {
			client.balance -= amount;
		}
		client.transactions = [transaction];

		await client.save();

		return res.status(200).json({ msg: "Transaction was added", client });
	}
}
