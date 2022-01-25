import { getRepository } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

export class GetAllTypeContactService{
    async execute(){
        const repo = getRepository(TypeContact)

        const typeContact = await repo.find()
        return typeContact
    }
}