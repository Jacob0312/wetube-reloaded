let videos = [
	{
		title: "First Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 1,
	},
	{
		title: "Second Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 1,
		id: 2,
	},
	{
		title: "Third Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 3,
	},
];

export const userHome = (req, res) => {
	res.render("home", { pageTitle: "Home", videos });
};
export const videoEdit = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const userSearch = (req, res) => res.render("home");

export const videoWatch = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const videoChange = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	videos[id - 1].title = title;
	return res.redirect(`/videos/${id}`);
};
export const videoRemove = (req, res) => res.send("This is Video Remove Page");

export const videoUpload = (req, res) => res.send("This is Video Upload Page");
