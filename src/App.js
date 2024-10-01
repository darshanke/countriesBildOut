
import './App.css';
import { Box, Card } from '@mui/material';
import CountryCard from './Components/CountryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [list,setlist] = useState([]);
  const countyData =async()=>{
    try{
      const res = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
      setlist(res.data);
    }catch(e){
      console.log(e.response.data);  
    }
  }
  useEffect(()=>{
    countyData();
  },[])
  return (
    <div className="App">
      <Box>
        <CountryCard countyData={list}/>
      </Box>
    </div>
  );
}

export default App;
