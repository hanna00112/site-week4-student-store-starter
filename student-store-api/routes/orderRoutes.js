const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// getting all the orders
router.get("/", orderController.getAllOrders);
//get orders by ID
router.get("/:id", orderController.getOrdersById);
//add a new order
router.post("/", orderController.createOrder);

//  total price, add items, delete, 


//create a new order
router.put("/:id", orderController.updateOrder);
//delete a order
router.delete("/:order_id", orderController.deleteOrder);

module.exports = router;
