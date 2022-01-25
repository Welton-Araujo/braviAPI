import { getRepository } from "typeorm"
import { TypeContact } from "../../entities/TypeContact"

export class GetTypeNameService{
    async execute(name: string){
        const repo = await  getRepository(TypeContact).createQueryBuilder().where("name = :name", {name: name}).getOne()

        if(!repo){
            return new Error("TypeContact does not exists!")
        }

        return repo
    }
}