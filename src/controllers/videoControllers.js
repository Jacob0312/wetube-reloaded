import Video from "../models/Video";

export const userHome = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};

export const videoEdit = (req, res) => {
	const { id } = req.params;
	return res.render("edit", { pageTitle: `Editing` });
};

export const userSearch = (req, res) => res.render("home");

export const videoWatch = (req, res) => {
	const { id } = req.params;
	return res.render("watch", { pageTitle: `Watching` });
};
export const videoChange = (req, res) => {
	const { id } = req.params;
	return res.redirect(`/videos/${id}`);
};
export const videoRemove = (req, res) => res.send("This is Video Remove Page");

export const getUpload = (req, res) =>
	res.render("upload", { pageTitle: "Upload Video" });

export const postUpload = async (req, res) => {
	const { title, description, hashtags } = req.body;
	try {
		await Video.create({
			title,
			description,
			hashtags: hashtags.split(",").map((word) => `#${word}`),
		});
		return res.redirect("/");
	} catch (error) {
		console.log(error);
		res.render("upload", {
			pageTitle: "Upload Video",
			errorMessage: error._message,
		});
	}
};
