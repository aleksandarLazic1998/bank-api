import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
}
