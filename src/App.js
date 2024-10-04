import './App.css';
import { Box } from '@mui/material';
import CountryCard from './Components/CountryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const countyData = async () => {
    try {
      const res = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
      setList(res.data);
      return res.data;
  
    } catch (e) {
      console.error('Error fetching data:', e.message);
      setList([]);
    }
  };

  useEffect(() => {
   countyData();
   
  }, []);

  return (
    <div className="App">
      {list.length>0?<Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "16px" }}>
        <CountryCard countryData={list} />
      </Box>:<p>no data avaliable</p>}
    </div>
  );
}

export default App;
