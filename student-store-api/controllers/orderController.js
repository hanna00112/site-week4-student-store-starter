
const orderModel = require("../models/orderModels");
const getAllOrders = async (req, res) => {
/* USED FOR SORTING 

    const { name, category, price } = req.query;
    let filter = {}; //filter object
    let orderBy = {}; //orderBy - asc/desc
  
    if (category) {
      filter.category = category;
    }
    if (name) {
      //set the orderBy according to asc/desc
      orderBy.name = name === "asc" ? "asc" : "desc";
    }
    if (price) {
      orderBy.price = price === "asc" ? "asc" : "desc";
    }
    */
    try {
      const orders = await orderModel.getAllOrders(); // add filter, orderBy
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  //Function to get order by ID
  const getOrdersById = async (req, res) => {
    try {
      const order = await orderModel.getOrdersById(req.params.order_id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //Function to create a new orders
  const createOrder = async (req, res) => {
    const orderData = req.body;
    console.log('Received order data:', orderData);
    try {
      const newOrder = await orderModel.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //Function to update a order
  const updateOrder = async (req, res) => {
    try {
      const updatedOrder = await orderModel.updateOrder(
        req.params.order_id,
        req.body
      );
      if (updatedOrder) {
        res.status(200).json(updatedOrder);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //Function to delete a order
  const deleteOrder = async (req, res) => {
    try {
      const deletedOrder = await orderModel.deleteOrder(req.params.order_id);
      if (deletedOrder) {
        res.status(200).json(deletedOrder);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const addItemToOrder = async (req, res) => {
  try {
    const orderItem = await orderModel.addItemToOrder(req.params.order_id, req.body);
    res.json(orderItem);
  }
  catch (error){
    console.error("Error adding item to order:", error);
    res.status(500).json({error: "Internal server error"});
  }
}

const calculateOrderTotal = async (req, res) => {
  try {
    const orderItem = await orderModel.calculateOrderTotal(req.params.order_id);
    if (orderItem) {
    res.status(201).json(orderItem);
  } else {
    res.status(404).json( {error: "Order not found"} )
  }
  }catch (error){
    console.error("Error calculating item to order:", error);
    res.status(500).json({error: "Internal server error"});
  }
}

  // export the function
  module.exports = {
    getAllOrders,
    getOrdersById,
    createOrder,
    updateOrder,
    deleteOrder, 
    addItemToOrder,
    calculateOrderTotal
  };