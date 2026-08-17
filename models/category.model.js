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

  findById: async (id) => {
    return await prisma.category.findUnique({
      where: { id: +id },
    });
  },

  create: async ({ name, status }) => {
    return prisma.category.create({
      data: {
        name,
        status,
      },
    });
  },

  update: async (id, { name, status }) => {
    return await prisma.category.update({
      where: {
        id: +id,
      },
      data: {
        name,
        status,
      },
    });
  },

  delete: async (id) => {
    return await prisma.category.delete({
      where: {
        id: +id,
      },
    });
  },
};
