// same functions as model but your like calling the ones you made in the model

const productModel = require("../models/productModels");

/*
Similar function from productModels but also sending a response
try -- if no products in array
*/
const getAllProducts = async (req, res) => {

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

  try {
    const products = await productModel.getAllProducts(filter, orderBy);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//Function to get product by ID
const getProductsById = async (req, res) => {
  try {
    const product = await productModel.getProductsById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to create a new product
const createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const newProduct = await productModel.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to update a product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productModel.updateProduct(
      req.params.id,
      req.body
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Function to delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// export the function
module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
