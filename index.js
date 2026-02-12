import express from "express";
import * as path from "path";
import "dotenv/config";
import japaneseAnimalRouter from "./routes/JapaneseAnimalRoute.js";
import persianAnimalRouter from "./routes/PersianAnimalRoute.js";
import chineseAnimalRouter from "./routes/ChineseAnimalRouter.js";
import { animalList } from "./data/animalList.js";

const app = express();
const port = process.env.PORT || 3040;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const animal = animalList.find((animal) => animal.id === req.query.id);
  console.log(animal);
  res.render("pages/index", {
    headTitle: "Asian Zoo | Home",
    welcomeMessage: "Welcome to our zoo page, where adventure and discovery await! Explore the fascinating world of animals, from the quirky quokka to the majestic cassowary. Immerse yourself in the beauty of nature and learn about creatures from all corners of the globe. We're thrilled to have you here—let's embark on this wild journey together!",
    pageType: "index",
    animalList: animalList,
    selectedAnimal: animal,
  });
});

app.use("/japanese-animals", japaneseAnimalRouter);
app.use("/persian-animals", persianAnimalRouter);
app.use("/chinese-animals", chineseAnimalRouter);

app.listen(port, () => {
  console.log(`I'm listening port ${port}`);
});
