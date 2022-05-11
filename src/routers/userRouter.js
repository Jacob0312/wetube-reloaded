import express from "express";
import { userEdit, userRemove, userLogin } from "../controllers/userControllers";
import { userSearch } from "../controllers/videoControllers";

const userRouter = express.Router();

userRouter.get("/edit", userEdit);
userRouter.get("/remove", userRemove);
userRouter.get("/login", userLogin);
userRouter.get("/search", userSearch);

export default userRouter;
