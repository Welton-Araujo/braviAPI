import { getRepository } from "typeorm"
import { Contact } from "../../entities/Contacts"

type ContactUpdateRequest ={
    id: string
    contact: string
}

export class UpdateContactService{
    async execute({id, contact}:ContactUpdateRequest){
        const repo = getRepository(Contact)

        const contactNumber = await repo.findOne(id)

        if(!contactNumber){
            return new Error("Contact does not exists!")
        }

        contactNumber.contact = contact ? contact : contactNumber.contact

        await repo.save(contactNumber)
        return contactNumber
    }
}