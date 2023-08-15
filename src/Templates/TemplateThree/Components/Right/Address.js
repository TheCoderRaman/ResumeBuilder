import {
  Box,
  Typography
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';

function Address({ form, themes }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        sx={{
          width: "90%",
          height: "auto",
          paddingTop: "5px",
          paddingBottom: "5px",
          color: palette.tertiary.main,
        }}
      >
        {get(form,'stepOne.address')}
      </Typography>
    </Box>
  );
}

export default Address;