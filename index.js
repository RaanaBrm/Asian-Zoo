import express from "express";
import * as path from "path";
import "dotenv/config";
import japaneseAnimalRouter from "./routes/JapaneseAnimalRoute.js";
import persianAnimalRouter from "./routes/PersianAnimalRoute.js";
import chineseAnimalRouter from "./routes/ChineseAnimalRouter.js";
import { AboutList } from "./data/AboutList.js";
import { animalList } from "./data/animalList.js";

const app = express();
const port = process.env.PORT || 3040;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

/* HOME */
app.get("/", (req, res) => {
  const animal = animalList.find((animal) => animal.id === req.query.id);
  console.log(animal);
  res.render("pages/index", {
    headTitle: "Asian Zoo | Home",
    welcomeMessage: "Welcome to our special exhibition of Asian wildlife!",
    pageType: "index",
    animalList: animalList,
    selectedAnimal: animal,
  });
});

/* COUNTRY */
app.use("/japanese-animals", japaneseAnimalRouter);
app.use("/persian-animals", persianAnimalRouter);
app.use("/chinese-animals", chineseAnimalRouter);

/* ABOUT */
app.get("/about", (req, res) => {
  const selectedPerson = AboutList.find((p) => p.id === req.query.id) || null;

  res.render("pages/about", {
    headTitle: "Asian Zoo | About",
    aboutList: AboutList,
    selectedPerson,
  });
});

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
