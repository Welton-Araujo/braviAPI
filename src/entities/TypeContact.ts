import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("typeContact")
export class TypeContact {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    creat_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}