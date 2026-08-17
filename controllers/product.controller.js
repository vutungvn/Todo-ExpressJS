import { productModel } from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
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
