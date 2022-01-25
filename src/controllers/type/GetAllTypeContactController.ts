import {Request, Response} from "express"
import { GetAllTypeContactService } from "../../services/type/GetAllTypeContactService"

export class GetAllTypeContactController{
    async handle(request: Request, response: Response){

        const service = new GetAllTypeContactService()

        const result = await service.execute()

        return response.json(result)
        
    }
}