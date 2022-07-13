import { Router } from "express";
import UserController from './../controller/UserController'
import verifyToken from "./../middleware/UserMiddleware"

const routes = Router()

routes.get('/getall', UserController.getAll)
routes.post("/create", verifyToken, UserController.create)
routes.patch("/update", UserController.update)
routes.delete("/delete", UserController.delete)
routes.get("/login", UserController.login)

export default routes;