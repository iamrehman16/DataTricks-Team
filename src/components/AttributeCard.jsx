import React from 'react';
import { Box, Typography } from '@mui/material';

const AttributeCard = ({ icon: Icon, title, desc }) => {
  return (
    <Box
      sx={{
        height: 350,
        width: 250,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 2,
        backdropFilter: 'blur(6px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        transition: 'transform 0.3s ease, background 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          background: 'rgba(255,255,255,0.15)',
        },
      }}
    >
      {/* Icon */}
      <Box sx={{ mb: 2, color: 'primary.main' }}>
        <Icon sx={{ fontSize: 90 }} />
      </Box>

      {/* Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {/* Description */}
      {desc && (
        <Typography variant="body2" sx={{ opacity: 0.8, textAlign: 'center' }}>
          {desc}
        </Typography>
      )}
    </Box>
  );
};

export default AttributeCard;
