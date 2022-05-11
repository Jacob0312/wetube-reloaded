import express from "express";
import {
	videoEdit,
	videoWatch,
	videoRemove,
	videoUpload,
	videoChange,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/upload", videoUpload);
videoRouter.get("/:id(\\d+)", videoWatch);

videoRouter.route("/:id/edit").get(videoEdit).post(videoChange);

videoRouter.get("/:id/remove", videoRemove);

export default videoRouter;
