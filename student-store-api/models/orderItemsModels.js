// CRUD functions

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the order
const getAllOrderItems = async (filter = {}, orderBy = {}) => {
    return prisma.orderItem.findMany({
      where: filter,
      orderBy: orderBy,
    });
  };

//Function to get order by ID
const getOrderItemsById = async (id) => {
    return prisma.orderItem.findUnique({ where: { order_id: parseInt(id) }});
  };

//Function to create a new order
const createOrderItem = async (orderItemData) => {
    return prisma.orderItem.create( {data: { 
      order_id: parseInt(orderItemData.order_id),
      product_id: parseInt(orderItemData.product_id),
      quantity: parseInt(orderItemData.quantity),
      price: parseFloat(orderItemData.price) 
    }});
  };

//Function to update a order
const updateOrderItem = async (order_id, orderData) => {
    return prisma.orderItem.update({
      where: { order_id: parseInt(order_id) },
      data: orderData,
    });
  };
  //Function to delete a order
  const deleteOrderItem = async (order_id) => {
    return prisma.orderItem.delete({ where: { order_id: parseInt(order_id) } });
  };
  



module.exports = {
    getAllOrderItems,
    getOrderItemsById,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}
  