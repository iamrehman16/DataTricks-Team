import { Box, Typography, Avatar } from "@mui/material";

const MemberCard = ({ image, name, role, expertise }) => {
  return (
    <Box
      sx={{
        width: 250,
        p: 3,
        borderRadius: 3,
        backgroundColor: "white",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }
      }}
    >
      {/* Profile Picture */}
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: 100,
          height: 100,
          mx: "auto",
          mb: 2,
          border: "3px solid #1976d2"
        }}
      />

      {/* Name */}
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>

      {/* Role */}
      <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 1 }}>
        {role}
      </Typography>

      {/* Expertise */}
      <Typography variant="body2" sx={{ opacity: 0.85 }}>
        {expertise}
      </Typography>
    </Box>
  );
};

export default MemberCard;
