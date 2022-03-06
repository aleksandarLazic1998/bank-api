import { Column, Entity } from "typeorm";
import { Person } from "./shared/Person";

@Entity("banker")
export class Banker extends Person {
	@Column({ unique: true, length: 10 })
	employee_number: string;
}
