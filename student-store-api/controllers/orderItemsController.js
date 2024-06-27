const orderItemsModel = require("../models/orderItemsModels");

const getAllOrderItems = async (req, res) => {
    try {
        const ordersItems = await orderItemsModel.getAllOrderItems(); // add filter, orderBy
        res.status(200).json(ordersItems);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }


//Function to get order by ID
const getOrderItemById = async (req, res) => {
    try {
      const orderItem = await orderItemsModel.getOrderItemById(req.params.order_item_id);
      if (orderItem) {
        res.status(200).json(orderItem);
      } else {
        res.status(404).json({ error: "Order Item not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//Function to create a new orders
const createOrderItem = async (req, res) => {
    const orderItemData = req.body;
    console.log('Received order Item data:', orderItemData);
    try {
      const newOrderItem = await orderItemsModel.createOrderItem(orderItemData);
      res.status(201).json(newOrderItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//Function to update a order
const updateOrderItem = async (req, res) => {
    try {
      const updatedOrderItem = await orderItemsModel.updateOrder(req.params.order_item_id,
        req.body);
      if (updatedOrderItem) {
        res.status(200).json(updatedOrderItem);
      } else {
        res.status(404).json({ error: "Order Item not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //Function to delete a order
  const deleteOrderItem = async (req, res) => {
    try {
      const deletedOrderItem = await orderItemsModel.deleteOrderItem(req.params.order_item_id);
      if (deletedOrderItem) {
        res.status(200).json(deletedOrderItem);
      } else {
        res.status(404).json({ error: "Order Item not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}