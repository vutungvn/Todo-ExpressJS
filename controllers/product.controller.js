import { productModel } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { products, totals } = await productModel.findAll({
      search,
      limit,
      skip,
    });

    res.json({
      status: "success",
      pagination: {
        totalItems: totals,
        currentPage: page,
        totalPages: Math.ceil(totals / limit),
        limit,
      },
      data: products,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, catIds } = req.body;
    const product = await productModel.create({ name, price, catIds });
    res.json({
      success: "true",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, catIds } = req.body;
    const product = await productModel.update(id, { name, price, catIds });
    res.json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.delete(id);
    res.json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
