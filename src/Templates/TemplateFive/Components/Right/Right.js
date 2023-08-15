import {
  Box,
  Divider
} from '@mui/material';

import React from 'react';
import StepTwo from './../Steps/StepTwo';
import StepThree from './../Steps/StepThree';

function Right(props) {
  return (
    <Box>
      <div
        style={{
          width: "64%",
          float: "right",
          height: "auto",
          padding: "0px 5% 0px 5%",
        }}
      >
        <StepTwo {...props} />

        <Divider sx={{ height: '10px' }}/>

        <StepThree {...props} />
      </div>
    </Box>
  );
}

export default Right;
