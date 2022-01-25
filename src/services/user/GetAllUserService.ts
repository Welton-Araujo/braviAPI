import { getRepository } from "typeorm"
import { User } from "../../entities/User"

export class GetAllUserService{
    async execute(){
        const repo = getRepository(User)

        const user = await repo.find({
            relations: ["contact"]
        })
        return user
    }
}