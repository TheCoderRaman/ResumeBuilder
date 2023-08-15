import {
  Box,
  Divider,
  Typography,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';

function Details({ form, themes }) {
  const { palette } = themes;

  return (
    <Box className="details-name-container" sx={{ padding: "5px" }}>
      <Typography
        sx={{
          fontSize: '30px',
          color: palette.quaternary.main,
        }}
        className="details-name"
      >
        {get(form, "stepOne.first_name") + " " + get(form, "stepOne.last_name")}
      </Typography>

      <Divider variant="middle" />

      <Typography
        sx={{
          fontSize: '15px',
          color: palette.quaternary.main,
        }}
        className="details-designation"
      >
        {get(form, "stepTwo.data.0.job_title")}
      </Typography>
    </Box>
  );
}

export default Details;
