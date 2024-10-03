import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmpServe Artisan Platform
          </Typography>
         
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;