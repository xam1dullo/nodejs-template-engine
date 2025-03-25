import express from "express";
import { join } from "node:path";

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

//engine
app.set("view engine", "ejs");
app.set("views", join(import.meta.dirname, "views"));

app.get("/login", (req, res) => {
  res.render("pages/login", { title: "LOGIN" });
});

app.post("/login", (req, res) => {
  const body = req.body;

  console.log(body);
  res.render("pages/profile", {
    ...body,
    title: "Profile page",
  });
});
// index page
app.get("/", function (req, res) {
  res.render("pages/index", {
    name: "XAMIDULLO",
    message: "SALOM DUNYO",
    users: [
      {
        name: "Umar",
        age: 22,
        gender: "Male",
      },
      {
        name: "Usmon",
        age: 21,
        gender: "Male",
      },
      {
        name: "J0hn",
        age: 20,
        gender: "Male",
      },
      {
        name: "Aziza",
        age: 18,
        gender: "Female",
      },
    ],
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about", {
    name: "ALISHET",
    message: "Hello world!",
  });
});

app.listen(PORT, () => {
  console.log(`Server runnin on port ${PORT}`);
});
