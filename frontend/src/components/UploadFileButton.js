import React from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadFileButton = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Button
      variant="contained"
      component="label"
      startIcon={<UploadFileIcon />}
      sx={{ marginTop: '10px', marginBottom: '20px' }}
    >
      Upload file
      <input type="file" hidden onChange={handleFileChange} />
    </Button>
  );
};

export default UploadFileButton;
