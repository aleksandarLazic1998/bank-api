import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";
import { Transaction } from "../entities/Transaction";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { DB_type } from "src/typescript/DbTypes";

const { DB_USERNAME, DB_HOST, DB_PORT, DB_PASSWORD } = process.env;
const port = DB_PORT ? +DB_PORT : 0;
const host = DB_HOST ? DB_HOST : "localhost";
const password = DB_PASSWORD ? DB_PASSWORD : "";
const username = DB_USERNAME ? DB_USERNAME : "";
export const dbType: DB_type = "postgres";

export const dbConnection: PostgresConnectionOptions = {
	host,
	username,
	database: "postgres",
	type: dbType,
	port,
	password,
	synchronize: true,
	entities: ["src/Entities/*.ts"],
};
