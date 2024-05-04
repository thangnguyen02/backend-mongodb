import express from "express";
import UserController from "../controller/user.controller.js";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getAll);
UserRouter.post("/", UserController.createOne);

export default UserRouter;
