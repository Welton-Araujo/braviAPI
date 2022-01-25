import { getRepository } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

export class GetTypeService{
    async execute(id: string){
        const repo = await  getRepository(TypeContact).createQueryBuilder().where("id = :id", {id: id}).getOne()

        if(!repo){
            return new Error("TypeContact does not exists!")
        }

        return repo
    }
}