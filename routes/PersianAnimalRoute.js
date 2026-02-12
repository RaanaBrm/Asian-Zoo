import express from "express";
import * as path from "path";
import { animalList } from "../data/animalList.js";

const persianAnimalRouter = express.Router();
const __dirname = path.resolve();

persianAnimalRouter.get("/", (req, res) => {
  const animal = animalList.find((animal) => animal.id === req.query.id);
  console.log(animal);

  res.render(path.join(__dirname, "/views/pages/animal.ejs"), {
    headTitle: "Persian Animals",
    pageType: "Iran",
    animalList: animalList,
    selectedAnimal: animal,
  });
});

export default persianAnimalRouter;
