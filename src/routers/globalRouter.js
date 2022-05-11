import express from "express";
import { userHome } from "../controllers/videoControllers";
import { userJoin } from "../controllers/userControllers";
const globalRouter = express.Router();

globalRouter.get("/", userHome);
globalRouter.get("/join", userJoin);

export default globalRouter;