import express from "express";
import * as path from "path";
import "dotenv/config";
import japaneseAnimalRouter from "./routes/JapaneseAnimalRoute.js";
import persianAnimalRouter from "./routes/PersianAnimalRoute.js";
import { AboutList } from "./data/AboutList.js";

const app = express();
const port = process.env.PORT || 3040;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

/* HOME */
app.get("/", (req, res) => {
  res.render("pages/index", {
    headTitle: "Asian Zoo | Home",
    welcomeMessage: "Welcome to our special exhibition of Asian wildlife!",
    selectedAnimal: null,
  });
});

/* JAPANESE */
app.use("/japanese-animals", japaneseAnimalRouter);

/* PERSIAN */
app.use("/persian-animals", persianAnimalRouter);

/* ABOUT */
app.get("/about", (req, res) => {
  const selectedPerson =
    AboutList.find((p) => p.id === req.query.id) || null;

  res.render("pages/about", {
    headTitle: "Asian Zoo | About",
    aboutList: AboutList,
    selectedPerson,
  });
});

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
