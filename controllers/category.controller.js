import prisma from "../config/db.js";
import { categoryModel } from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const { search } = req.query;

    const categories = await categoryModel.findAll(search);

    res.json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const createCategoty = async (req, res) => {
  try {
    const { name, status } = req.body;
    const category = await categoryModel.create({ name, status });

    return res.status(201).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
