import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

const Cart = () => {
  const navigate = useNavigate(); // For redirection
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleProceedToPayment = () => {
    navigate("/Payments");
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5">
          <ShoppingCart className="me-2 text-success" />
          Your Cart - <span className="text-success">e-Kisaan Store</span>
        </h1>
        <p className="text-muted">Green deals for the modern farmer 🌿</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty. Let's add some crops! 🌾
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong>
                    <div className="text-muted">Qty: {item.quantity}</div>
                  </div>
                  <div className="d-flex align-items-center">
                    ₹{item.price * item.quantity}
                    <button
                      className="btn btn-sm btn-outline-secondary ms-3"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-outline-success ms-2"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text fw-bold">Total Price: ₹{total}</p>
                <button
                  className="btn btn-success w-100"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
