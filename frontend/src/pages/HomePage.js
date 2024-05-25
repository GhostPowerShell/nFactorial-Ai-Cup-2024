import React from 'react';
import { Container, Typography, Button } from '@mui/material';  // Ensure Button is imported
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Code Vulnerability Analysis
      </Typography>
      <Typography variant="body1" gutterBottom>
        Analyze your code for vulnerabilities and get patched versions.
      </Typography>
      <Link to="/analyze">
        <Button variant="contained" color="primary"> {/* Ensure Button is used */}
          Start Analysis
        </Button>
      </Link>
    </Container>
  );
};

export default HomePage;
