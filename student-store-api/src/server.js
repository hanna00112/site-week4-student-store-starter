require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const productRoutes = require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes");
const orderItemsRoutes = require("../routes/orderItemsRoutes");

app.use(express.json()); // used for JSON file
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! You are currently at the / route");
});
app.use("/products", productRoutes); // used to access all products from productRoutes
app.use("/orders", orderRoutes); // used to access all order from orderRoutes
app.use("/orderItems", orderItemsRoutes); // used to access all orderItems from orderItemsRoutes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}!`);
});
