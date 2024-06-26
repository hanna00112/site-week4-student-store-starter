require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const orderRoutes = require("../routes/orderRoutes");
const productRoutes = require("../routes/productRoutes");

app.use(express.json()); // used for JSON file

app.get("/", (req, res) => {
  res.send("Hello World! You are currently at the / route");
});
app.use("/products", productRoutes); // used to access all products from productRoutes
app.use("/orders", orderRoutes); // used to access all products from productRoutes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}!`);
});
