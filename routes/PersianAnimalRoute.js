import express from "express";
import { PersianAnimalList } from "../data/PersianAnimalList.js";

const router = express.Router();

router.get("/persian-animals", (req, res) => {
  res.render("pages/index", {
    headTitle: "Asian Zoo",
    welcomeMessage: "Welcome! Click an animal name to see its details.",
    animals: PersianAnimalList,
  });
});

export default router;
