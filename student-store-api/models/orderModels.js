// CRUD functions

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the order
const getAllOrders = async (filter = {}, orderBy = {}) => {
  return prisma.order.findMany({
    where: filter,
    orderBy: orderBy,
    include: {OrderItem: true}
  });
};

//Function to get order by ID
const getOrdersById = async (id) => {
  return prisma.order.findUnique({ where: { order_id: parseInt(id) } });
};
//Function to create a new order
const createOrder = async (orderData) => {
  return prisma.order.create({
    data: {
      customer_id: parseInt(orderData.customer_id),
      total_price: 0,
      status: orderData.status,
      //include: {OrderItem: true}
    },
  });
};
//Function to update a order
const updateOrder = async (order_id, orderData) => {
  return prisma.order.update({
    where: { order_id: parseInt(order_id) },
    data: orderData,
    include: {OrderItem: true}
  });
};
//Function to delete a order
const deleteOrder = async (order_id) => {
  return prisma.order.delete({ where: { order_id: parseInt(order_id) }, include: {OrderItem: true} });
};

/*
  function is used to to add items to an existing order
  */
const addItemToOrder = async (orderId, orderData) => {
  //console.log("orderData", orderData);
  const product = await prisma.product.findUnique({
    where: { id: parseInt(orderData.product_id) },
  });
  const order = await prisma.order.findUnique({
    where: { order_id: parseInt(orderId) },
  });
  await prisma.order.update({
    where: { order_id: parseInt(orderId) }, // finding the order
    data: {
      // calculating the total of the order item (product price times the number of that product added to the the total price of the order)
      total_price:
        parseFloat(order.total_price) +
        parseFloat(product.price) * parseInt(orderData.quantity),
    },
  });
  // creating the order item to be added
  return prisma.orderItem.create({
    data: {
      order_id: parseInt(orderId),
      product_id: parseInt(orderData.product_id),
      quantity: parseInt(orderData.quantity),
      price: parseFloat(product.price) * parseInt(orderData.quantity),
    },
  });
};

const calculateOrderTotal = async (orderId) => {
  // getting the order
  const order = await prisma.order.findUnique({
    where: { order_id: parseInt(orderId) },
  });
  return order.total_price;
};

//exporting that function
module.exports = {
  getAllOrders,
  getOrdersById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemToOrder,
  calculateOrderTotal,
};
