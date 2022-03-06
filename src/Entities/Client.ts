import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Banker } from "./Banker";
import { Person } from "./shared/Person";
import { Transaction } from "./Transaction";

@Entity("client")
export class Client extends Person {
	@Column({ type: "numeric", default: 0 })
	balance: number;

	@Column({ name: "active", default: true })
	is_active: boolean;

	@Column({ type: "simple-json", nullable: true })
	additional_info: { age: number; hair_color: string };

	@Column({ type: "simple-array", default: [] })
	family_members: [];

	/* Foreign Keys */
	@OneToMany(() => Transaction, (transactions) => transactions.client)
	transactions: Transaction[];

	@ManyToMany((type) => Banker)
	bankers: Banker[];
}
