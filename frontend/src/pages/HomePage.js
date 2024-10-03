// src/HomePage.js
import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Link } from '@mui/material';
import { styled } from '@mui/system';

// Sample data
const artisans = [
  // Your artisan data here
];

const HeroSection = styled('div')(({ theme }) => ({
  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
  color: '#fff',
  padding: '60px 20px',
  textAlign: 'center',
}));

const useStyles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to EmpServe Artisan Platform
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Discover skilled artisans and their unique crafts.
          </Typography>
          <Button variant="contained" color="secondary" href="#artisans">
            Explore Artisans
          </Button>
          <div style={{ marginTop: '20px' }}>
            <Link href="/about" underline="none" color="inherit">
              <Button variant="outlined" color="secondary">
                About Us
              </Button>
            </Link>
            <Link href="/contact" underline="none" color="inherit">
              <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </HeroSection>

      {/* Artisans Section */}
      <Container id="artisans" style={{ marginTop: '40px' }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
         
        </Typography>
        <Grid container spacing={4}>
          {artisans.map((artisan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={useStyles.card}>
                <CardMedia
                  sx={useStyles.media}
                  image={artisan.image}
                  title={artisan.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {artisan.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {artisan.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
