import { getRepository, SimpleConsoleLogger } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

export class DeleteTypeContactService{
    async execute(id: string){
        const repo = getRepository(TypeContact)

        if(!await repo.findOne(id)){
            return new Error("TypeContact does not exists!")
        }

        await repo.delete(id)
    }
}