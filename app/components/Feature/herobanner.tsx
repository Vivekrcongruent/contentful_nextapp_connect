import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        backgroundImage: 'url(/hero-int.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" gutterBottom>
        Welcome to Nextjs with contentful 
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        POC for Consuming and Exposing 
      </Typography>
      <Button variant="contained" color="secondary" gutterBottom>
        Get Started
      </Button>
    </Box>
  );
};

export default HeroBanner;