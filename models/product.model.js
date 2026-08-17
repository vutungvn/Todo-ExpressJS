import prisma from "../config/db.js";

export const productModel = {
  findAll: async ({ search, limit, skip }) => {
    console.log(search, skip, limit);
    const where = search ? { name: { contains: search } } : {};
    const [products, totals] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    return { products, totals };
  },
};
