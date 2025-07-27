import { Box, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, desc, link }) => {
  return (
    <Box
      sx={{
        width: 300,
        p: 3,
        borderRadius: 3,
        backgroundColor: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }
      }}
    >
      {/* Project Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {/* Project Description */}
      <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
        {desc}
      </Typography>

      {/* Project Link */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => window.open(link, "_blank")}
      >
        View Project
      </Button>
    </Box>
  );
};

export default ProjectCard;
