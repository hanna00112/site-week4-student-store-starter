
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


// getting all the products
router.get("/", productController.getAllProducts)
router.get("/:id", ) //getting products by id

module.exports = router;