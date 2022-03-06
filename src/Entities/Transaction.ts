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
enum TransactionActions {
	WITHDRAWAL = "WITHDRAWAL",
	DEPOSIT = "DEPOSIT",
}

@Entity("transaction")
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ enum: TransactionActions, type: "enum" })
	type: string;

	@Column({ type: "numeric", default: 0 })
	balance: number;

	/* Foreign Keys */
	@ManyToOne(() => Client, (client) => client.transactions)
	@JoinColumn({ name: "client_id" })
	client: Client;
}
