import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";

import Payments from "./Pages/Payments";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import OrdersPage from "./pages/OrdersPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = () => {
      dispatch(clearCart());
    };

    window.addEventListener("clearCart", handler);
    return () => window.removeEventListener("clearCart", handler);
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
