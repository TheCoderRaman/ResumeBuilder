import {
  Box,
} from '@mui/material';

import React from 'react';
import StepOne from './../Steps/StepOne';
import StepFour from './../Steps/StepFour';

function Left(props) {
  const { palette } = props.themes;

  return (
    <Box
      sx={{
        width: "36%",
        float: "left",
        height: "113vh",
        padding: "1% 1%",
        backgroundColor: palette.secondary.main,
      }}
    >
      <div className='px-0'>
        <StepOne {...props} />
      </div>

      <div className='px-0'>
        <StepFour {...props} />
      </div>
    </Box>
  );
}

export default Left;
