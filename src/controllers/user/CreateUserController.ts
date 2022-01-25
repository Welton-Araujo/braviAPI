import {Request, Response} from "express"
import { CreateUserService } from "../../services/user/CreateUserService"

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, contact_id } = request.body

        const service = new CreateUserService()

        const result = await service.execute({name, contact_id})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}