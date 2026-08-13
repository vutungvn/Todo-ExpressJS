import express from "express";
import {
  getCategories,
  createCategoty,
  updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategoty);
router.put("/:id", updateCategory);

export default router;
