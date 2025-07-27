import { Box, Typography } from "@mui/material";

const PerformanceCard = ({ number, label }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 250,
        p: 3,
        borderRadius: 3,
        backgroundColor: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
        }
      }}
    >
      {/* Big Number */}
      <Typography variant="h3" fontWeight="bold" color="primary.main">
        {number}
      </Typography>
      {/* Label */}
      <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default PerformanceCard;
