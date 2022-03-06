import { Response } from "express";

export const findItemError = (itemId: string, item: string) => {
	let response: Response;
	return response
		.status(400)
		.json({ msg: `${item} with id:${itemId} was not found` });
};
