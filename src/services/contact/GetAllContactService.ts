import { getRepository } from "typeorm"
import { Contact } from "../../entities/Contacts"

export class GetAllContactService{
    async execute(){
        const repo = getRepository(Contact)

        const contact = await repo.find({
            relations: ["typeContact"]
        })
        return contact
    }
}