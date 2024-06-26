const express = require("express");
const router = express.Router();
const orderItemsController = require("../controllers/orderItemsController");

// getting all the ordersItems
router.get("/", orderItemsController.getAllOrderItems);
//get ordersitems by ID
router.get("/:id", orderItemsController.getOrderItemById);
//add a new orderItem
router.post("/", orderItemsController.createOrderItem);
//edit a new orderItem
router.put("/:id", orderItemsController.updateOrderItem);
//delete a orderItem
router.delete("/:order_id", orderItemsController.deleteOrderItem);


module.exports = router;

