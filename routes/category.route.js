import express from "express";
import {
  getCategories,
  createCategoty,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategoty);

export default router;
