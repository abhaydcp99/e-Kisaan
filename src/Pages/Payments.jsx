import { useState } from "react";
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

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
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

            {/* Payment Method Selection */}
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

            {/* Card Details - Visible only when Credit/Debit Card is selected */}
            {paymentMethod === "credit" && (
              <>
                {/* Card Number Field */}
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        **** **** ****
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Expiry Date and CVV */}
                <Grid container spacing={2}>
                  {/* Expiry Date */}
                  <Grid item xs={6}>
                    <TextField
                      label="Expiry Date (MM/YY)"
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  {/* CVV */}
                  <Grid item xs={6}>
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      type="password"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </>
            )}

            {/* UPI Details - Visible only when UPI is selected */}
            {paymentMethod === "upi" && (
              <>
                {/* UPI ID Field */}
                <TextField
                  label="UPI ID"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </>
            )}

            {/* Amount */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Total Amount: <strong>₹ 999.00</strong>
            </Typography>

            {/* Submit Button */}
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
