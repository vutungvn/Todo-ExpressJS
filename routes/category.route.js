import express from "express";
import {
  getCategories,
  createCategoty,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategoty);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
