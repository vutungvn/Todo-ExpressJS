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
