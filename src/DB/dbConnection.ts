type DB_type = "postgres";

export const dbType: DB_type = "postgres";

const { DB_USERNAME, DB_HOST, DB_PORT, DB_PASSWORD } = process.env;
const port = DB_PORT ? +DB_PORT : 6868;

export const dbConnection = {
	host: DB_HOST,
	username: DB_USERNAME,
	database: "postgres",
	type: dbType,
	port,
	password: DB_PASSWORD,
};
