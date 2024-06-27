const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// getting all the orders
router.get("/", orderController.getAllOrders);
//get orders by ID
router.get("/:order_id", orderController.getOrdersById);
//add a new order
router.post("/", orderController.createOrder);

//create a new order
router.put("/:order_id", orderController.updateOrder);
//delete a order
router.delete("/:order_id", orderController.deleteOrder);

// New endpoint for adding items to an order
router.post("/:order_id/items", orderController.addItemToOrder);
router.get("/:order_id/total", orderController.calculateOrderTotal);

module.exports = router;
