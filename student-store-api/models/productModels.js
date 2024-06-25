// CRUD functions
/*
const products = [
    {id: 1, name: "College Hoodie", description: "green soft hoodie", price: 29.99, image_url: "#", category: "clothing"}, 
    {id: 2, name: "Algebra Textbook", description: "book used for Algebra 101", price: 59.99, image_url: "#", category: "books"},
    {id: 3, name: "College Notebook", description: "100 page notebook", price: 6.99, image_url: "#", category: "books"}
]
*/

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the products
const getAllProducts = async (filter = {}, orderBy = {}) => {
  return prisma.product.findMany({
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
