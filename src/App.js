
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
      console.error('Error fetching data:', e.message);
       if (e.response) {
        
        console.error('Error fetching data:', e.message);
       
      } else if (e.request) {
      
        console.log(e.request);
       
      } else {
       
        console.log('Error', e.message);
        
      }

      
      setlist([]);
      
    }
  }
  useEffect(()=>{
    countyData();
  },[])
  return (
    <div className="App"  sx={{display: "flex",  flexWrap: "wrap"}}>
      <Box>
        <CountryCard countyData={list}/>
      </Box>
    </div>
  );
}

export default App;
