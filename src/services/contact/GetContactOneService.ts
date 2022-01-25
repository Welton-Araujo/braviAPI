import { getRepository } from "typeorm"
import { Contact } from "../../entities/Contacts"

export class GetContactOneService{
    async execute(contact: string){
        const repo = await  getRepository(Contact).createQueryBuilder().where("contact = :contact", {contact: contact}).getOne()
        console.log("repo:", repo)
        if(!repo){
            return new Error("Contact does not exists!")
        }

        return repo
    }
}