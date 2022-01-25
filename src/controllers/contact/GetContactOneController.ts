import {Request, Response} from "express"
import { GetContactOneService } from "../../services/contact/GetContactOneService"

export class GetContactOneController{
    async handle(request: Request, response: Response){

        const { contact } = request.params

        
        const service = new GetContactOneService()


        const result = await service.execute(contact)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}