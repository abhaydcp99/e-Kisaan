import React, { useRef } from "react";
import { Button, Box, Typography } from "@mui/material";
import Products from "../components/Products";
import { motion } from "framer-motion";

import bgVideo from "../assets/bg_vdo.mp4";

function Home() {
  const productsRef = useRef(null);
  const MotionDiv = motion.div;
  const isAbhay = false;

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Video */}
      {!isAbhay && (
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
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

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
        {/* Animated Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to e-Kisaan
          </Typography>
        </MotionDiv>

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
          onClick={handleScrollToProducts}
        >
          See What’s Fresh
        </Button>
      </Box>

      {/* Products Section */}
      <Box ref={productsRef} sx={{ position: "relative", zIndex: 1, mt: 5 }}>
        <Products />
      </Box>
    </Box>
  );
}

export default Home;
