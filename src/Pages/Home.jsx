import { Button, Container, Box, Typography } from "@mui/material";
import Products from "../components/Products";

function Home() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100%",
          minHeight: "100%",

          objectFit: "contain",
          zIndex: -1,
        }}
      >
        <source src="/src/assets/bg_vdo.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to e-Kisaan
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Fresh and Organic Products for You
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
          "Connecting Fields to Families — The e-Kisaan Way."
        </Typography>
        <Button
          sx={{
            backgroundColor: "#2e7d32",
            color: "white",
            px: 4,
            py: 1,
            "&:hover": { backgroundColor: "#1b5e20" },
          }}
        >
          See What’s Fresh
        </Button>
      </Box>

      {/* Products Section */}
      <Box sx={{ position: "relative", zIndex: 1, mt: 5 }}>
        <Products />
      </Box>
    </Box>
  );
}

export default Home;
