import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 200 })
    firstName!: string;

    @Column('varchar', { length: 200 })
    lastName!: string;

    @Column('boolean')
    isActive!: boolean;
}
