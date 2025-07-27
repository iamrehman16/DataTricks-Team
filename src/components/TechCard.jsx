import { Box, Typography } from "@mui/material";

const TechCard = ({ image, title }) => {
  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        p: 2,
        borderRadius: 3,
        backgroundColor: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
        }
      }}
    >
      {/* Tech Icon/Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: 50, height: 50, mb: 1 }}
      />
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default TechCard;
