// CRUD functions

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the order
const getAllOrders = async (filter = {}, orderBy = {}) => {
  return prisma.order.findMany({
    where: filter,
    orderBy: orderBy,
  });
};

//Function to get order by ID
const getOrdersById = async (id) => {
  return prisma.order.findUnique({ where: { order_id: parseInt(id) }});
};
//Function to create a new order
const createOrder = async (orderData) => {
  return prisma.order.create(
    {data: {
        customer_id: parseInt(orderData.customer_id),
        total_price: parseFloat(orderData.total_price),
        status: orderData.status,
    }
    });
};
//Function to update a order
const updateOrder = async (order_id, orderData) => {
  return prisma.order.update({
    where: { order_id: parseInt(order_id) },
    data: orderData,
  });
};
//Function to delete a order
const deleteOrder = async (order_id) => {
  return prisma.order.delete({ where: { order_id: parseInt(order_id) } });
};

//exporting that function
module.exports = {
  getAllOrders,
  getOrdersById,
  createOrder,
  updateOrder,
  deleteOrder,
};
