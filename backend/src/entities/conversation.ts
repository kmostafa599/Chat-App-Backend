import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Message } from "./message"
import { User } from "./user";

@Entity('Conversation')
export class Conversation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    

    @OneToMany(
        ()=>Message,
        message=>message.conversation
    )
    messages :Message[]

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}








