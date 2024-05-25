import React from 'react';
import { Button } from '@mui/material';

const PatchButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} style={{ marginTop: '10px' }}>
      Generate Patch
    </Button>
  );
};

export default PatchButton;
