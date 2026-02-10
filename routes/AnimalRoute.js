import express from "express";
import { PersianAnimalList } from "../data/PersianAnimalList.js";

const router = express.Router();

router.get("/animal/:id", (req, res) => {
  const animal = PersianAnimalList.find(
    (a) => a.id === req.params.id
  );

  if (!animal) {
    return res.status(404).send("Animal not found");
  }

  res.render("pages/animal", {
    headTitle: animal.name,
    animal,
  });
});

export default router;
