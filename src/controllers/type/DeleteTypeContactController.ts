import {Request, Response} from "express"
import { DeleteTypeContactService } from "../../services/type/DeleteTypeContactService"

export class DeleteTypeContactController{
    async handle(request: Request, response: Response){

        const { id } = request.params

        const service = new DeleteTypeContactService()

        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).end()
        
    }
}