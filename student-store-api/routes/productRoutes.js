
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


// getting all the products
router.get("/", productController.getAllProducts)
//get products by ID
router.get("/:id", productController.getProductsById);
//add a new products\
router.post("/", productController.createProduct);
//create a new product
router.put("/:id", productController.updateProduct);
//delete a product
router.delete("/:id", productController.deleteProduct);


module.exports = router;