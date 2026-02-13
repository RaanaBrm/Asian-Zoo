import express from "express";
import * as path from "path";
import { animalList } from "../data/animalList.js";

const japaneseAnimalRouter = express.Router();
const __dirname = path.resolve();

japaneseAnimalRouter.get("/", (req, res) => {
  const animal = animalList.find((animal) => animal.id === req.query.id);
  console.log(animal);

  res.render(path.join(__dirname, "/views/pages/animal.ejs"), {
    headTitle: "Japanese Animals",
    pageType: "Japan",
    animalList: animalList,
    selectedAnimal: animal,
  });
});

export default japaneseAnimalRouter;
