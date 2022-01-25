import {Request, Response} from "express"
import { GetTypeService } from "../../services/type/GetTypeService"

export class GetTypeController{
    async handle(request: Request, response: Response){

        const { id } = request.params

        
        const service = new GetTypeService()


        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}