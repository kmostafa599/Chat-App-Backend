import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm"
import { Conversation } from "./conversation"
import { User } from "./user"

@Entity('Message')
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    text: string

   

    

    @ManyToOne(
        ()=>User,
        user=>user.messages
    )
    user :User

    @ManyToOne(
        ()=>Conversation,
        conversation=>conversation.messages
    )
   
    conversation :Conversation






}



