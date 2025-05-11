import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // ✅ Step 1: Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user")); // adjust key if needed
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      // ✅ Step 2: Fetch orders using userId
      axios
        .get(`/api/orders/${userId}`)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));
    }
  }, [userId]);
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Ordered On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={order.order_id}>
              <td>{idx + 1}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>₹{order.total_price}</td>
              <td>{new Date(order.order_date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-sm btn-info me-2">View</button>
                {order.order_status === "Pending" && (
                  <button className="btn btn-sm btn-danger">Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrdersPage;
