import {Request, Response} from "express"
import { GetTypeNameService } from "../../services/type/GetTypeNameService"

export class GetTypeNameController{
    async handle(request: Request, response: Response){

        const { name } = request.params

        
        const service = new GetTypeNameService()


        const result = await service.execute(name)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}