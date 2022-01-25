import { getRepository } from "typeorm"
import { Contact } from "../../entities/Contacts"

export class DeleteContactService{
    async execute(id: string){
        const repo = getRepository(Contact)

        if(!await repo.findOne(id)){
            return new Error("Contact does not exists!")
        }

        await repo.delete(id)
    }
}