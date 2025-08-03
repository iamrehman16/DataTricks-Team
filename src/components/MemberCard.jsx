import { Box, Typography, Avatar } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StorageIcon from "@mui/icons-material/Storage";
import AndroidIcon from '@mui/icons-material/Android';

// ✅ Helper function to pick the correct icon dynamically
const getRoleIcon = (role) => {
  const lower = role.toLowerCase();
  if (lower.includes("full stack")) return <CodeIcon sx={{ fontSize: 28, color: "#fff" }} />;
  if (lower.includes("ui/ux")) return <PsychologyIcon sx={{ fontSize: 28, color: "#fff" }} />;
  if (lower.includes("game")) return <SportsEsportsIcon sx={{ fontSize: 28, color: "#fff" }} />;
  if (lower.includes("data")) return <StorageIcon sx={{ fontSize: 28, color: "#fff" }} />;
  if (lower.includes("android")) return <AndroidIcon sx={{ fontSize: 28, color: "#fff" }} />;
  return <CodeIcon sx={{ fontSize: 28, color: "#fff" }} />; // default fallback
};

const MemberCard = ({ image, name, role, expertise }) => {
  return (
    <Box
      sx={{
        position: "relative",
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
      {/* 🔹 Corner Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "#1976d2",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
        }}
      >
        {getRoleIcon(role)}
      </Box>

      {/* 🔹 Profile Picture */}
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

      {/* 🔹 Name */}
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>

      {/* 🔹 Role */}
      <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 1 }}>
        {role}
      </Typography>

      {/* 🔹 Expertise */}
      <Typography variant="body2" sx={{ opacity: 0.85 }}>
        {expertise}
      </Typography>
    </Box>
  );
};

export default MemberCard;
