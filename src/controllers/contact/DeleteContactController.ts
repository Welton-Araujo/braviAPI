import {Request, Response} from "express"
import { DeleteContactService } from "../../services/contact/DeleteContactService"

export class DeleteContactController{
    async handle(request: Request, response: Response){

        const { id } = request.params

        const service = new DeleteContactService()

        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(200).end()
        
    }
}