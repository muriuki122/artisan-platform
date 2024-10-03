import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmpServe Artisan Platform
          </Typography>
          <Button color="inherit" component={Link} to="/signin">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ marginLeft: 2 }}>
            Register
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
