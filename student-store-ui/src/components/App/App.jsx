import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import {
  removeFromCart,
  addToCart,
  getQuantityOfItemInCart,
  getTotalItemsInCart,
} from "../../utils/cart";
import "./App.css";

const devUrl = "http://localhost:3000";

function App() {
  // State variables
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ id: "", email: "" });
  const [products, setProducts] = useState([]); // ADD USE EFFECT
  const [cart, setCart] = useState({});
  const [isFetching, setIsFetching] = useState(false); // ADD USE EFFECT
  const [isCheckingOut, setIsCheckingOut] = useState(false); // ADD USE EFFECT
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    async function fetchProduct() {
      try {
        const response = await axios.get(`${devUrl}/products`);
        console.log(response, "response");
        setProducts(response.data);
      } catch (error) {
        console.error("error fetching product", error);
      } finally {
        setIsFetching(false);
      }
    }
    fetchProduct();
  }, []);

  // Toggles sidebar
  const toggleSidebar = () => setSidebarOpen((isOpen) => !isOpen);

  // Functions to change state (used for lifting state)
  const handleOnRemoveFromCart = (item) => setCart(removeFromCart(cart, item));
  const handleOnAddToCart = (item) => setCart(addToCart(cart, item));
  const handleGetItemQuantity = (item) => getQuantityOfItemInCart(cart, item);
  const handleGetTotalCartItems = () => getTotalItemsInCart(cart);

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleOnCheckout = async () => {
    setIsCheckingOut(true);
    const response = await axios.post(`${devUrl}/orders`, {
      customer_id: parseInt(userInfo.id),
      status: "in progress",
    });
    console.log(response);
    const data = response.data; // making empty order
    setOrder(data);

    console.log(cart);

    for (const [key, value] of Object.entries(cart)) {
      await axios.post(`${devUrl}/orders/${data.order_id}/items`, {
        product_id: parseInt(key),
        quantity: parseInt(value),
      });
    }

    await axios.put(`${devUrl}/orders/${data.order_id}`, {
      status: "completed",
    });
    const response2 = await axios.get(`${devUrl}/orders/${data.order_id}`);
    const data2 = response2.data;
    setOrder(data2);

    setCart({}); // emptying the cart
    setIsCheckingOut(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar
          cart={cart}
          error={error}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isOpen={sidebarOpen}
          products={products}
          toggleSidebar={toggleSidebar}
          isCheckingOut={isCheckingOut}
          addToCart={handleOnAddToCart}
          removeFromCart={handleOnRemoveFromCart}
          getQuantityOfItemInCart={handleGetItemQuantity}
          getTotalItemsInCart={handleGetTotalCartItems}
          handleOnCheckout={handleOnCheckout}
          order={order}
          setOrder={setOrder}
        />
        <main>
          <SubNavbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  products={products}
                  isFetching={isFetching}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  addToCart={handleOnAddToCart}
                  searchInputValue={searchInputValue}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="/:productId"
              element={
                <ProductDetail
                  cart={cart}
                  error={error}
                  products={products}
                  addToCart={handleOnAddToCart}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  error={error}
                  products={products}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
