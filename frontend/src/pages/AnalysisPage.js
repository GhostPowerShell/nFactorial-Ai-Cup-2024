import React, { useState } from 'react';
import { Container, Typography, Box, CircularProgress, Button, Grid } from '@mui/material';
import CodeEditor from '../components/CodeEditor';
import VulnerabilityReport from '../components/VulnerabilityReport';
import PatchButton from '../components/PatchButton';
import UploadFileButton from '../components/UploadFileButton';
import { analyzeCode, generatePatch } from '../services/api';

const AnalysisPage = () => {
  const [code, setCode] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await analyzeCode(code);
    setVulnerabilities(result.vulnerabilities);
    setLoading(false);
  };

  const handleGeneratePatch = async () => {
    setLoading(true);
    const result = await generatePatch(code);
    setVulnerabilities(result.patched_code);
    setLoading(false);
  };

  const handleFileUpload = (fileContent) => {
    setCode(fileContent);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Analyze Code
      </Typography>
      <UploadFileButton onUpload={handleFileUpload} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CodeEditor code={code} setCode={setCode} />
        </Grid>
        <Grid item xs={6}>
          <VulnerabilityReport vulnerabilities={vulnerabilities} />
        </Grid>
      </Grid>
      <Box mt={2} display="flex" justifyContent="center" position="sticky" bottom="10px">
        <Button variant="contained" color="primary" onClick={handleAnalyze} disabled={loading} sx={{ marginRight: '10px', width: '200px' }}>
          Analyze Code
        </Button>
        <PatchButton onClick={handleGeneratePatch} disabled={loading} />
      </Box>
      {loading && <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />}
    </Container>
  );
};

export default AnalysisPage;
