import React from 'react';
import { Box, TextField } from '@mui/material';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Box sx={{ height: '400px', overflowY: 'scroll', border: '1px solid #673ab7', borderRadius: '4px', padding: '10px' }}>
      <TextField
        label="Write code..."
        multiline
        rows={20}
        variant="outlined"
        fullWidth
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </Box>
  );
};

export default CodeEditor;
