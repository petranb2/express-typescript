import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class WaitingUser {
    @PrimaryColumn('varchar', { length: 100 })
    email!: string;

    @Column('date')
    subscribeDate!: Date;
}
