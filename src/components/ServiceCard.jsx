import { Box, Typography } from "@mui/material";

const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 300,
        p: 3,
        borderRadius: 3,
        backgroundColor: "white",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }
      }}
    >
      {/* Icon */}
      <Box sx={{ mb: 2, color: "primary.main" }}>
        <Icon sx={{ fontSize: 60 }} />
      </Box>

      {/* Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {/* Description */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
