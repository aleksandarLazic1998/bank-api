import http from "http";
import { createConnection } from "typeorm";
import app from "./app";
import { dbConnection } from "./DB/dbConnection";

const PORT = process.env["PORT"];
const server = http.createServer(app);

const main = async () => {
	try {
		const resposne = await createConnection(dbConnection);

		server.listen(PORT, () => {
			console.log(`Listening on PORT: ${PORT}`);
		});
	} catch (error) {
		throw new Error("The server is not running");
	}
};

main();
