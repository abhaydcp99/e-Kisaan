import {
  Box,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Email } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1b5e20",
        color: "white",
        mt: 5,
        pt: 5,
        pb: 3,
        px: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            About e-Kisaan
          </Typography>
          <Typography variant="body2">
            e-Kisaan connects farmers and buyers through a smart digital
            <br></br>
            marketplace. Bringing fresh, organic produce to your doorstep.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                style={{ color: "white", textDecoration: "none" }}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/Payments"
                style={{ color: "white", textDecoration: "none" }}
              >
                Payments
              </a>
            </li>
          </ul>
        </Grid>

        {/* Feedback Box */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Your Feedback
          </Typography>
          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="Write your feedback..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              mb: 1,
            }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            Submit
          </Button>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Connect With Us
          </Typography>
          <Box>
            <IconButton
              sx={{ color: "white" }}
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              href="https://www.instagram.com/abhaysinh_dcp_/profilecard/?igsh=OXU2M2d0MWQ2dHRj"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              href="https://www.linkedin.com/in/abhay-dcp-"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              href="mailto:contact@ekisaan.com"
            >
              <Email />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        textAlign="center"
        mt={5}
        pt={2}
        borderTop="1px solid rgba(255,255,255,0.2)"
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} e-Kisaan Portal. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
