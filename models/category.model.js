import prisma from "../config/db.js";

export const categoryModel = {
  findAll: async (search) => {
    return await prisma.category.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      include: {
        products: true,
      },
    });
  },
};
