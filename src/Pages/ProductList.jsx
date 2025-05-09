import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useEffect } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 30,
    image: "src/assets/tomatoes.jpeg",
  },
  { id: 2, name: "Fresh Wheat", price: 40, image: "src/assets/wheat.jpeg" },
  { id: 3, name: "Kashmiri Apples", price: 50, image: "src/assets/apple.jpeg" },
  { id: 4, name: "Cucumber", price: 20, image: "src/assets/cucumber.jpeg" },
  { id: 5, name: "Fresh Milk", price: 45, image: "src/assets/milk.jpeg" },
  {
    id: 6,
    name: "Juicy Strawberry",
    price: 60,
    image: "src/assets/strawberry.jpeg",
  },
  { id: 7, name: "Green Elichi", price: 35, image: "src/assets/elichi.jpeg" },
  { id: 8, name: "Butter", price: 120, image: "src/assets/butter.jpeg" },
  { id: 9, name: "Brinjal", price: 10, image: "src/assets/brinjal.jpeg" },
];

function ProductList() {
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
      })
    );
    setOpenSnackBar(true);
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
        {dummyProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
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
