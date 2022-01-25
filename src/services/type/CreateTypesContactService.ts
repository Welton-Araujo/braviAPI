import { getRepository } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

type TypesContactRequest ={
    name: string
}

export class CreateTypesContactService{
    async execute({name}:TypesContactRequest): Promise<TypeContact | Error>{
        const repo = getRepository(TypeContact)

        if(await repo.findOne({name})){
            return new Error("TypeContact already exists")
        }

        const typeContact = repo.create({
            name
        })

        await repo.save(typeContact)
        return typeContact
    }
}