import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import { Person } from './Person';

@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    type!: string;
    @ManyToOne(() => Person,  person => person.pet)
    owner!:Person;

}