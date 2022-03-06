import http from "http";
import app from "./app";
import { createConnection } from "typeorm";
import { dbConnection } from "./DB/dbConnection";

const { PORT } = process.env;
const server = http.createServer(app);

const main = async () => {
	try {
		await createConnection(dbConnection);

		server.listen(PORT, () => {
			console.log(`Listening on PORT: ${PORT}`);
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

main();
