import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import api from "../../api.js";

function ProductList() {
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      alert(`Error fetching products: ${err.message}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    if (!product._id) {
      console.error("Product ID is missing");
      return;
    }
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
      })
    );
    setOpenSnackBar(true);
    try {
      await api.post("/cart", {
        productId: product._id,
        qty: 1,
      });
    } catch (err) {
      console.error("Added into cart:", err.response?.data || err.message);
    }
  };

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  return (
    <div className="container mt-5">
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "#102E50",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Added to Cart
        </MuiAlert>
      </Snackbar>

      <h2
        className="text-center mb-4"
        style={{ color: "#2e7d32", fontWeight: "bold" }}
      >
        Our Fresh Products
      </h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{product.name}</h5>
                <span
                  className="badge bg-success mb-3"
                  style={{ fontSize: "1rem", padding: "10px 15px" }}
                >
                  ₹{product.price}/kg
                </span>
                <br />
                <button
                  className="btn btn-outline-success px-4 fw-semibold"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
