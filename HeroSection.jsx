import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay effect
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h4" fontWeight="bold">
          Job Board WordPress Themes
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Your job search starts and ends with us.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          See Our Curated Jobs
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection