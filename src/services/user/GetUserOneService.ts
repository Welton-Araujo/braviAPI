import { getRepository } from "typeorm"
import { User } from "../../entities/User"

export class GetUserOneService{
    async execute(name: string){
        const repo = await  getRepository(User).createQueryBuilder().where("name = :name", {name: name}).getOne()
        console.log("repo:", repo)
        if(!repo){
            return new Error("User does not exists!")
        }

        return repo
    }
}