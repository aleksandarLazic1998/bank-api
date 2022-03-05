import http from "http";
import app from "./app";

const PORT = process.env["PORT"];
const server = http.createServer(app);

const main = async () => {
	server.listen(PORT, () => {
		console.log(`Listening on PORT: ${PORT}`);
	});
};

main();
