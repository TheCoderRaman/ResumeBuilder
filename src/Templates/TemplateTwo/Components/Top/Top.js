import './Top.css';

import {
  Box,
  Divider,
  Typography,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import Profile from './Profile';
import Details from './Details';

function Top(props) {
  const { form } = props;
  const { palette } = props.themes;

  return (
    <Box>
      <Box
        className="header"
        sx={{
          backgroundColor: palette.primary.main,
        }}
      >
        <Box className="header-left pb-5">
          <Profile {...props} />
          <Details {...props} />
        </Box>

        <Typography
            sx={{
              width: "11rem",
              textOverflow: "ellipsis",
              color: palette.quaternary.main,
            }}
            className="header-right"
          >
            {get(form,'stepOne.address')}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: palette.quaternary.main,
        }}
        className="header-about"
      >
        {get(form,'stepOne.objective')}
      </Typography>
    </Box>
  )
}

export default Top;