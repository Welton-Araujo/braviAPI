import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Contact } from "./Contacts";

@Entity("user")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    contact_id: string;

    @ManyToOne(() => Contact)
    @JoinColumn({name: "contact_id"})
    contact: Contact;

    @CreateDateColumn()
    creat_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}