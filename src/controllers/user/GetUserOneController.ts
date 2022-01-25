import {Request, Response} from "express"
import { GetUserOneService } from "../../services/user/GetUserOneService"

export class GetUsertOneController{
    async handle(request: Request, response: Response){

        const { name } = request.params

        
        const service = new GetUserOneService()


        const result = await service.execute(name)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
        
    }
}