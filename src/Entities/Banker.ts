import { Column, Entity, JoinColumn, JoinTable, ManyToMany } from "typeorm";
import { Client } from "./Client";
import { Person } from "./shared/Person";

@Entity("banker")
export class Banker extends Person {
	@Column({ unique: true, length: 10 })
	employee_number: string;

	/* Foreign Keys */
	@ManyToMany(() => Client)
	@JoinTable({
		name: "bankers_clients",
		joinColumn: {
			name: "banker",
			referencedColumnName: "id",
		},
		inverseJoinColumn: {
			name: "client",
			referencedColumnName: "id",
		},
	})
	clients: Client[];
}
