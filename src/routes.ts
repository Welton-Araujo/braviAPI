import { Router } from "express"

import { CreateUserController } from "./controllers/user/CreateUserController"
import { GetAllUserController } from "./controllers/user/GetAllUserController"
import { DeleteUserController } from "./controllers/user/DeleteUserController"
import { UpdateUserController } from "./controllers/user/UpdateUserController"
import { GetUsertOneController } from "./controllers/user/GetUserOneController"

import { CreateContactController } from "./controllers/contact/CreateContactController"
import { GetAllContactController } from "./controllers/contact/GetAllContactController"
import { DeleteContactController } from "./controllers/contact/DeleteContactController"
import { UpdateContactController } from "./controllers/contact/UpdateContactController"
import { GetContactOneController } from "./controllers/contact/GetContactOneController"



import { CreateTypesContactController } from "./controllers/type/CreateTypesContactController"
import { GetAllTypeContactController } from "./controllers/type/GetAllTypeContactController"
import { DeleteTypeContactController } from "./controllers/type/DeleteTypeContactController"
import { UpdateTypesContactController } from "./controllers/type/UpdateTypesContactController"
import { GetTypeController } from "./controllers/type/GetTypeController"
import { GetTypeNameController } from "./controllers/type/GetTypeNameController"


const routes = Router()

routes.post("/type-contact", new CreateTypesContactController().handle)
routes.get("/get-type-contact", new GetAllTypeContactController().handle)
routes.delete("/delete-type-contact/:id", new DeleteTypeContactController().handle)
routes.put("/update-type-contact/:id", new UpdateTypesContactController().handle)


routes.post("/contact", new CreateContactController().handle)
routes.get("/get-contact", new GetAllContactController().handle)
routes.delete("/delete-contact/:id", new DeleteContactController().handle)
routes.put("/update-contact/:id", new UpdateContactController().handle)

routes.post("/user", new CreateUserController().handle)
routes.get("/get-user", new GetAllUserController().handle)
routes.delete("/delete-user/:id", new DeleteUserController().handle)
routes.put("/update-user/:id", new UpdateUserController().handle)

routes.get("/get-type/:id", new GetTypeController().handle)
routes.get("/get-type-name/:name", new GetTypeNameController().handle)

routes.get("/get-contact-one/:contact", new GetContactOneController().handle)
routes.get("/get-user-one/:name", new GetUsertOneController().handle)
















export {routes}