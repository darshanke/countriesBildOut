import { Card, Grid, Typography ,Box} from '@mui/material';
import React from 'react';

const CountryCard = ({ countyData }) => {
  if(!countyData) return <Box>Item not loaded yet</Box>
  return (
    <Grid container spacing={3}>
      {countyData.map((item, index) => (
        <Grid item  key={index}>
          <Card sx={{ padding: '1rem', width: '200px', height: '200px' }}> 
            <img
              src={item.flag}
              alt={item.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
            <Typography sx={{padding : '1rem'}}ariant="body2" align="center">
              {item.name}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryCard;
