import { Card, Grid, Typography } from '@mui/material';
import React from 'react';

const CountryCard = ({ countyData }) => {
  return (
    <Grid container spacing={3}>
      {countyData.map((item, index) => (
        <Grid item xs={12 / 7} key={index}>
          <Card sx={{ padding: '1rem', width: '150px', height: '150px' }}> {/* Set equal width and height */}
            <img
              src={item.flag}
              alt={item.name}
              style={{ width: '100%', height: '70%', objectFit: 'cover' }} // Ensure the image fits well
            />
            <Typography variant="body2" align="center">
              {item.name}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryCard;
