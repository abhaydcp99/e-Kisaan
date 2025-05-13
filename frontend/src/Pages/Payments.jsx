import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const cartItems = useSelector((state) => state.cart.items);
  const loggedIn = !!localStorage.getItem("token");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    // Clear previous fields on method switch
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setUpiId("");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const validatePayment = () => {
    if (paymentMethod === "credit") {
      const cardRegex = /^\d{16}$/;
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const cvvRegex = /^\d{3}$/;

      if (!cardRegex.test(cardNumber)) {
        alert("Invalid card number. Must be 16 digits.");
        return false;
      }
      if (!expiryRegex.test(expiryDate)) {
        alert("Invalid expiry date. Format should be MM/YY.");
        return false;
      }
      if (!cvvRegex.test(cvv)) {
        alert("Invalid CVV. Must be 3 digits.");
        return false;
      }
    } else if (paymentMethod === "upi") {
      const upiRegex = /^[\w.-]{2,256}@[a-zA-Z]{2,64}$/;
      if (!upiRegex.test(upiId)) {
        alert("Invalid UPI ID format.");
        return false;
      }
    }
    return true;
  };

  const handlePayment = () => {
    if (!validatePayment()) return;

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrders = cartItems.map((item) => ({
      order_id: Date.now() + Math.random(),
      product_name: item.name,
      quantity: item.quantity,
      total_price: item.quantity * item.price,
      order_status: "Pending",
      order_date: new Date().toISOString(),
    }));

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, ...newOrders])
    );

    window.dispatchEvent(new Event("clearCart"));
    if (loggedIn) {
      window.location.href = "/Orders";
    } else {
      window.location.href = "/Register";
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ color: "#2e7d32" }}
            >
              Payment Details
            </Typography>

            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend" sx={{ color: "#333" }}>
                Choose Payment Method
              </FormLabel>
              <RadioGroup
                row
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                name="paymentMethod"
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit/Debit Card"
                />
                <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              </RadioGroup>
            </FormControl>

            {paymentMethod === "credit" && (
              <>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  inputProps={{ maxLength: 16 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">****</InputAdornment>
                    ),
                  }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Expiry Date (MM/YY)"
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 2 }}
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      type="password"
                      sx={{ mb: 2 }}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      inputProps={{ maxLength: 3 }}
                    />
                  </Grid>
                </Grid>
              </>
            )}

            {paymentMethod === "upi" && (
              <TextField
                label="UPI ID"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="example@upi"
              />
            )}

            <Typography variant="h6" sx={{ mb: 2 }}>
              Total Amount: <strong>₹ {total}</strong>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                textTransform: "none",
                padding: "10px",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#1b5e20",
                },
              }}
              onClick={handlePayment}
            >
              Pay Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Payment;
