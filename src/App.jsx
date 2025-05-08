import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import ProductList from "../src/Pages/ProductList";
import Payments from "./Pages/Payments";
import About from "./Pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
