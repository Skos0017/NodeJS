import { University } from "./Universion";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Students";


@Entity()
export class Teacher {
@PrimaryGeneratedColumn()
id!: number;

@Column()
name!: string;

@ManyToMany(() => Student, student => student.teachers)
students!: Student[];

@ManyToMany(() => University, university => university.teachers)
@JoinTable()
universities!: University[];
}