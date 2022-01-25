import {Request, Response} from "express"
import { UpdateTypesContactService } from "../../services/type/UpdateTypesContactService"

export class UpdateTypesContactController{
    async handle(request: Request, response: Response){
        const { id } = request.params
        const { name } = request.body

        const service = new UpdateTypesContactService()

        const result = await service.execute({id, name})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}