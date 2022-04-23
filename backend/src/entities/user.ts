import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Conversation } from "./conversation"
import { Message } from "./message"

@Entity('User')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({
        unique:true
    })
    email: string

    @Column({
        unique:true
    })
    username: string

    @Column({
        unique:true
    })
    password: string

    @OneToMany(
        ()=>Message,
        message => message.user

    )
    @JoinColumn({
        name: "message",

    })
    messages:Message[]

    @ManyToMany(() => User)
    conversations: Conversation[];


}



