import {Request, Response} from "express"
import { UpdateContactService } from "../../services/contact/UpdateContactService"

export class UpdateContactController{
    async handle(request: Request, response: Response){
        const { id } = request.params
        const { contact } = request.body

        const service = new UpdateContactService()

        const result = await service.execute({id, contact})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}