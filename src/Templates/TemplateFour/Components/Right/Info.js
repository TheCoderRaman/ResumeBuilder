import {
  Box,
  Typography
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';

function Info({ form, themes }) {
  const { palette } = themes;

  return (
    <Box sx={{ color: palette.tertiary.main }}>
      <Typography
        varient="h1"
        sx={{
          fontSize: "250%",
          marginTop: "-5vh",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        {get(form,'stepOne.first_name')}
      </Typography>

      <Typography
        varient="h1"
        sx={{
          fontSize: "250%",
          marginTop: "-2vh",
          marginBottom: "2vh",
          letterSpacing: "10px",
        }}
      >
        {get(form,'stepOne.last_name')}
      </Typography>
    </Box>
  );
}

export default Info;
