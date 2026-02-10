import express from "express";
import { PersianAnimalList } from "../data/PersianAnimalList.js";

const router = express.Router();

router.get("/persian-animals", (req, res) => {
  res.render("pages/index", {
    animals: PersianAnimalList,
  });
});

export default router;
