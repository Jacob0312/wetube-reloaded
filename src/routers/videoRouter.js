import express from "express";
import {
	videoEdit,
	videoWatch,
	videoRemove,
	getUpload,
	postUpload,
	videoChange,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", videoWatch);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(videoEdit).post(videoChange);

videoRouter.get("/:id/remove", videoRemove);

export default videoRouter;
