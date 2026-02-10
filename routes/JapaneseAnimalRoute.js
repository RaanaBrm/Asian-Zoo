import express from "express";
import * as path from "path";
import { japaneseAnimalList } from "../data/animalList.js";

const japaneseAnimalRouter = express.Router();
const __dirname = path.resolve();

japaneseAnimalRputer.get("/", (req, res) => {
  const animal = japaneseAnimalList.find(
    (animalList) => animalList.id === req.query.id
  );
  console.log(animal);

  res.render(path.join(__dirname, "/views/pages/animal.ejs"), {
    headTitle: "Japanese Animals",
    pageType: "japan",
    animalList: japaneseAnimalList,
    selectedAnimal: animal,
  });
});

export default japaneseAnimalRouter;
