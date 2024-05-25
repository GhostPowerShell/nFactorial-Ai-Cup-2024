import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, PersonAdd as PersonAddIcon, LockOpen as LockOpenIcon } from '@mui/icons-material';
import Logo from '../logo.png'; // Ensure the logo.png is in the src directory

const HomePage = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
        <img src={Logo} alt="App Logo" style={{ width: '150px', height: '150px', marginBottom: '20px' }} />
        <Typography variant="h2" gutterBottom>
          Welcome to AppSec AI
        </Typography>
        <Typography variant="body1" gutterBottom>
          Analyze your code for vulnerabilities and get patched versions.
        </Typography>
        <Box mt={2} display="flex" justifyContent="center" gap="10px">
          <Link to="/analyze" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" startIcon={<SearchIcon />} style={{ textTransform: 'none', fontWeight: 'bold' }}>
              Start Analysis
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" startIcon={<PersonAddIcon />} style={{ textTransform: 'none', fontWeight: 'bold' }}>
              Register
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="inherit" startIcon={<LockOpenIcon />} style={{ textTransform: 'none', fontWeight: 'bold' }}>
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
