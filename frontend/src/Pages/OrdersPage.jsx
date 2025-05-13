import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [doneOrderCount, setDoneOrderCount] = useState(0);

  // 1: Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      // 2: Fetch orders using userId
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

  // Calculate total amount and count of "done" orders
  useEffect(() => {
    if (orders.length > 0) {
      let total = 0;
      let doneCount = 0;

      orders.forEach((order) => {
        total += order.total_price;
        if (order.order_status === "Done") {
          doneCount += 1;
        }
      });

      setTotalAmount(total);
      setDoneOrderCount(doneCount);
    }
  }, [orders]);

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
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={order.order_id}>
              <td>{idx + 1}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>₹{order.total_price}</td>
              <td>
                {new Date(order.order_date).toLocaleString("en-US", {
                  weekday: "short", 
                  year: "numeric", 
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric", 
                  second: "numeric", 
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Display Total and Done Orders */}
      <div className="d-flex justify-content-between mt-4">
        <h5>Total Amount: ₹{totalAmount}</h5>
        <h5>
          {doneOrderCount > 0
            ? `Orders Delivered! Thank You for Supporting e-Kisaan.`
            : "Orders In Progress. We are working on it!"}
        </h5>
      </div>
    </div>
  );
};

export default OrdersPage;
