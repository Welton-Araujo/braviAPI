import { getRepository } from "typeorm"
import { User} from "../../entities/User"
import { Contact } from "../../entities/Contacts"

type UserRequest ={
    name: string
    contact_id: string
}

export class CreateUserService{
    async execute({name, contact_id}:UserRequest){
        const repo = getRepository(User)
        const repoContact = getRepository(Contact)


        if(!await repoContact.findOne(contact_id)){
            return new Error("Contact does not exists")
        }

        const userCreate = repo.create({
            name,
            contact_id
        })

        await repo.save(userCreate)
        return userCreate
    }
}