import { Response } from "express";

interface IProps {
	res: Response;
	email: string;
	cardNumber: string;
}

export const validateClients = ({ email, cardNumber, res }: IProps) => {
	let payload;
	let validationPayload = "User must add ";
	if (!email) {
		payload = { msg: (validationPayload += "email") };
		return res.status(400).json(payload);
	} else if (!cardNumber) {
		payload = { msg: (validationPayload += "card number") };
		return res.status(400).json(payload);
	}
};
