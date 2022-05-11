

export const userJoin = (req,res) => res.send("This is Join Page");

export const userEdit = (req,res) => res.send("User Edit Section");

export const userRemove = (req,res) => res.send("User Remove Section");

export const userLogin = (req,res) => res.render("login", { variable: "Login123", second: "Pageeeee", pageTitle: "LoginPage"});
