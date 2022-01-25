import { getRepository } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

type TypesContactUpdateRequest ={
    id: string
    name: string
}

export class UpdateTypesContactService{
    async execute({id, name}:TypesContactUpdateRequest){
        const repo = getRepository(TypeContact)

        const typeContact = await repo.findOne(id)

        if(!typeContact){
            return new Error("TypeContact does not exists!")
        }

        typeContact.name = name ? name : typeContact.name

        await repo.save(typeContact)
        return typeContact
    }
}