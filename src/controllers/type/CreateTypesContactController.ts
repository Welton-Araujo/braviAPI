import {Request, Response} from "express"
import { CreateTypesContactService } from "../../services/type/CreateTypesContactService"

export class CreateTypesContactController{
    async handle(request: Request, response: Response){
        const { name } = request.body

        const service = new CreateTypesContactService()

        const result = await service.execute({name})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}