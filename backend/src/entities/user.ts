import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm"

@Entity('User')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    username: string
    
    @Column()
    password: string




}



