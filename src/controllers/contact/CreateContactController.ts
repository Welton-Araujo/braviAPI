import {Request, Response} from "express"
import { CreateContactService } from "../../services/contact/CreateContactService"

export class CreateContactController{
    async handle(request: Request, response: Response){
        const { contact, typeContact_id } = request.body

        const service = new CreateContactService()

        const result = await service.execute({contact, typeContact_id})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}