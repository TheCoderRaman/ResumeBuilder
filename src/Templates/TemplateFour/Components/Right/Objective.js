import {
  Box,
  Typography
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';

function Objective({ form, themes }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "4vh",
          textAlign: "center",
          color: palette.primary.main,
          backgroundColor: palette.tertiary.main,
        }}
      >
        <Typography varient="h1">
            {t('Objective')}
        </Typography>
      </Box>

      <Typography
        sx={{
          width: "90%",
          height: "auto",
          paddingTop: "5px",
          paddingBottom: "5px",
          color: palette.tertiary.main,
        }}
      >
        {get(form,'stepOne.objective')}
      </Typography>
    </Box>
  );
}

export default Objective;
