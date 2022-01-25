import {Request, Response} from "express"
import { GetAllContactService } from "../../services/contact/GetAllContactService"

export class GetAllContactController{
    async handle(request: Request, response: Response){

        const service = new GetAllContactService()

        const result = await service.execute()

        return response.json(result)
        
    }
}