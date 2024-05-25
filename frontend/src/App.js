import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AppBar, Toolbar, Typography, Box, Button, CssBaseline, Container } from '@mui/material';
import Logo from './logo.png'; // Ensure the logo.png is in the src directory
import { Search as SearchIcon, PersonAdd as PersonAddIcon, LockOpen as LockOpenIcon } from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              <img src={Logo} alt="App Logo" style={{ marginRight: '10px', height: '40px' }} />
              <Typography variant="h6">AppSec AI</Typography>
            </Link>
            <Box>
              <Link to="/analyze" style={{ textDecoration: 'none', marginRight: '10px' }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<SearchIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Analyze
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none', marginRight: '10px' }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<PersonAddIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Register
                </Button>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<LockOpenIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flex: 1, py: 4 }}>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/analyze" element={<AnalysisPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </Box>
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              nFactorial-Ai-Cup-2024
            </Typography>
          </Container>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
