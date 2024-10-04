import './App.css';
import { Box, Card } from '@mui/material';
import CountryCard from './Components/CountryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);  // Add error state to track errors

  const countyData = async () => {
    try {
      const res = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
      setList(res.data);
      setError(null);  // Reset error if API call is successful
    } catch (e) {
      // Log specific errors for better debugging
      if (e.response) {
        console.error("Error fetching data:", e.response.data); // Log error for API response issues
        setError("Failed to fetch country data. Please try again.");
      } else if (e.request) {
        console.error("No response from the server:", e.request); // Log error if request was made but no response
        setError("No response from server. Check your connection.");
      } else {
        console.error("Error:", e.message);  // Log any other errors
        setError("An unexpected error occurred.");
      }

      setList([]);  // Clear list if error occurs
    }
  };

  useEffect(() => {
    countyData();
  }, []);

  return (
    <div className="App">
      <Box>
        {/* Show error message if there is an error */}
        {error ? (
          <div className="error-message" style={{ color: 'red' }}>
            {error}
          </div>
        ) : (
          <CountryCard countyData={list} />
        )}
      </Box>
    </div>
  );
}

export default App;
