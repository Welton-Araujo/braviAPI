import { getRepository } from "typeorm"
import { Contact } from "../../entities/Contacts"
import { TypeContact } from "../../entities/TypeContact"

type ContactRequest ={
    contact: string
    typeContact_id: string
}

export class CreateContactService{
    async execute({contact, typeContact_id}:ContactRequest){
        const repo = getRepository(Contact)
        const repoTypeContact = getRepository(TypeContact)


        if(!await repoTypeContact.findOne(typeContact_id)){
            return new Error("TypeContact does not exists")
        }

        const contactCreate = repo.create({
            contact,
            typeContact_id
        })

        await repo.save(contactCreate)
        return contactCreate
    }
}