import { Router } from "express";
import UserController from './../controller/UserController'

const routes = Router()

routes.get('/users', UserController.getAll)
routes.post("/user", UserController.create)
routes.patch("/update", UserController.update)
routes.delete("/delete", UserController.delete)

export default routes;