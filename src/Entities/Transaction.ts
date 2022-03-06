import { TransactionActions } from "../typescript/TransactionActions";
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";
import { Person } from "./shared/Person";

@Entity("transaction")
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: ["WITHDRAW", "DEPOSIT"],
	})
	type: TransactionActions;

	@Column({ type: "numeric", default: 0 })
	amount: number;

	/* Foreign Keys */
	@ManyToOne(() => Client, (client) => client.transactions)
	@JoinColumn({ name: "client_id" })
	client: Client;
}
