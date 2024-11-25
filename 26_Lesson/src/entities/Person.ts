
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Pet } from './Pet';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;

    @OneToOne(() => Pet,pet =>pet.owner)
    pet!: Pet[];
}