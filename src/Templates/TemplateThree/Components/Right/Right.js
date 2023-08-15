import {
  Box,
  Divider
} from '@mui/material';

import React from 'react';
import Info from './Info';
import Address from './Address';
import Objective from './Objective';
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
          padding: "5% 5%",
        }}
      >
        <Info {...props} />
        <Address {...props} />

        <Divider />

        <Objective {...props} />
        <StepTwo {...props} />

        <Divider sx={{ height: '10px' }}/>

        <StepThree {...props} />
      </div>
    </Box>
  );
}

export default Right;
