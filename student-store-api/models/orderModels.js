
// CRUD functions

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the products
const getAllOrder = async (filter = {}, orderBy = {}) => {
  return prisma.order.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

//Function to get car by ID
const getProductsById = async (id) => {
  return prisma.product.findUnique({ where: { id: parseInt(id) } });
};
//Function to create a new product
const createProduct = async (productData) => {
  return prisma.product.create({ data: productData });
};
//Function to update a product
const updateProduct = async (id, productData) => {
  return prisma.product.update({
    where: { id: parseInt(id) },
    data: productData,
  });
};
//Function to delete a product
const deleteProduct = async (id) => {
  return prisma.product.delete({ where: { id: parseInt(id) } });
};

//exporting that function
module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
