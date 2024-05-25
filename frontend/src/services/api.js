import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const analyzeCode = async (code) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { code });
    return response.data;
  } catch (error) {
    console.error('Error analyzing code:', error);
    return { vulnerabilities: 'An error occurred while analyzing the code.' };
  }
};

export const generatePatch = async (code) => {
  try {
    const response = await axios.post(`${API_URL}/patch`, { code });
    return response.data;
  } catch (error) {
    console.error('Error generating patch:', error);
    return { patched_code: 'An error occurred while generating the patch.' };
  }
};
