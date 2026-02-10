import express from "express";
import { PersianAnimalList } from "../data/PersianAnimalList.js";

const router = express.Router();

router.get("/persian-animals", (req, res) => {
  const animal = PersianAnimalList.find(
    (animalList) => animalList.id === req.query.id
  );

  res.render("pages/index", {
    headTitle: "Asian Zoo",
    welcomeMessage: "Welcome! Click an animal name to see its details.",
    animalList: PersianAnimalList,
    selectedAnimal: animal || null,
  });
});

export default router;
