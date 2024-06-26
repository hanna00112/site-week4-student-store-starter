
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");


// getting all the orders
router.get("/", orderController.getAllOrder)
//get orders by ID
router.get("/:id", orderController.getOrderById);
//add a new order
router.post("/", orderController.createOrder);
//create a new order
router.put("/:id", orderController.updateOrder);
//delete a order
router.delete("/:id", orderController.deleteOrder);


module.exports = router;