import { Card, Typography, Box } from "@mui/material";
import React from "react";

const CountryCard = ({ countryData }) => {
  if (!countryData || countryData.length === 0) {
    return  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "16px",
    }}
  >
   
      <Card
        key={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
          padding: '1rem',
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://flagcdn.com/w320/af.png"
            alt="Afghanistan"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Typography variant="body2" align="center" sx={{ marginTop: '8px' }}>
        Afghanistan
        </Typography>
      </Card>
  
  </Box>
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {countryData.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "200px",
            padding: '1rem',
          }}
        >
          <div
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.flag}
              alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Typography variant="body2" align="center" sx={{ marginTop: '8px' }}>
            {item.name}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default CountryCard;
