import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Students";
import { Teacher } from "./Teacher";


@Entity()
export class University {
@PrimaryGeneratedColumn()
id!: number;

@Column()
name!: string;

@OneToMany(() => Student, student => student.university)
students!: Student[];

@ManyToMany(() => Teacher, teacher => teacher.universities)
teachers!: Teacher[];
}