// CRUD functions

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the order
const getAllOrders = async (filter = {}, orderBy = {}) => {
  return prisma.product.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

//Function to get order by ID
const getOrdersById = async (id) => {
  return prisma.order.findUnique({ where: { id: parseInt(order_id) } });
};
//Function to create a new order
const createOrder = async (orderData) => {
  return prisma.order.create({ data: orderData });
};
//Function to update a order
const updateOrder = async (id, orderData) => {
  return prisma.order.update({
    where: { id: parseInt(order_id) },
    data: orderData,
  });
};
//Function to delete a order
const deleteOrder = async (order_id) => {
  return prisma.order.delete({ where: { id: parseInt(order_id) } });
};

//exporting that function
module.exports = {
  getAllOrders,
  getOrdersById,
  createOrder,
  updateOrder,
  deleteOrder,
};
