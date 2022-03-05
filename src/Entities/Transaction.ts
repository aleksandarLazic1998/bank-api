import { TransactionActions } from "src/typescript/enums/TransactionActions";
import { BaseEntity, Column, Entity } from "typeorm";
import { Person } from "./shared/Person";

@Entity("transaction")
export class Transaction extends BaseEntity {
	@Column({ enum: TransactionActions, type: "enum" })
	type: string;

	@Column({ type: "numeric", default: 0 })
	balance: number;
}
