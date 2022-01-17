
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    descripcion: string;
}