import express from "express";
import { animalList } from "../data/animalList.js";

const router = express.Router();

router.get("/", (req, res) => {
  const persianAnimals = animalList.filter(a => a.country === "iran");

  const selectedAnimal =
    persianAnimals.find(a => a.id === req.query.id) || null;

  res.render("pages/index", {
    headTitle: "Asian Zoo | Persian Animals",
    welcomeMessage: "Welcome! Click an animal name to see its details.",
    animalList: persianAnimals,
    selectedAnimal,
  });
});

export default router;
