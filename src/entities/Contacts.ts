import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { TypeContact } from "./TypeContact";

@Entity("contact")
export class Contact {
    @PrimaryColumn()
    id: string;

    @Column()
    contact: string;

    @Column()
    typeContact_id: string;

    @ManyToOne(() => TypeContact)
    @JoinColumn({name: "typeContact_id"})
    typeContact: TypeContact;

    @CreateDateColumn()
    creat_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}