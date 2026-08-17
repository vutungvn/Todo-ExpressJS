import prisma from "../config/db.js";

export const productModel = {
  findAll: async ({ search, limit, skip }) => {
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

  create: async ({ name, price, catIds }) => {
    return await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        categories:
          catIds && catIds.length > 0
            ? { connect: catIds.map((id) => ({ id: +id })) }
            : undefined,
      },
      include: {
        categories: true,
      },
    });
  },

  update: async (id, { name, price, catIds }) => {
    const updateData = {
      name,
      price: parseFloat(price),
    };

    if (catIds && Array.isArray(catIds)) {
      updateData.categories = {
        set: catIds.map((catId) => ({ id: +catId })),
      };
    }

    return await prisma.product.update({
      where: { id: +id },
      data: updateData,
      include: { categories: true },
    });
  },

  delete: async (id) => {
    return await prisma.product.delete({
      where: { id: +id },
    });
  },
};
