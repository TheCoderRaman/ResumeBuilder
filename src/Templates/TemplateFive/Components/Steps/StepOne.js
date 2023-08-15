import {
  Box,
  Typography,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function StepOne({ form, themes }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%', scale: '1 0.8', marginTop:'-1%' }}>
      <Typography
        varient="h1"
        sx={{
          width: "90%",
          height: "4vh",
          textAlign: "center",
          marginBottom: "10px",
          textTransform: "capitalize",
          color: palette.primary.main,
          backgroundColor: palette.tertiary.main,
        }}
      >
        &nbsp; {t('Personal Info')}
      </Typography>

      <Typography
        sx={{
            width: "90%",
            marginBottom: "2vh",
            color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"Person"} />
        &nbsp; {get(form,'stepOne.first_name')+' '+get(form,'stepOne.last_name')}
      </Typography>

      <Typography
        sx={{
          width: "90%",
          display: "flex",
          marginBottom: "2vh",
          color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"Email"} />
        &nbsp; {get(form,'stepOne.email')}
      </Typography>
      
      <Typography
        sx={{
            width: "90%",
            marginBottom: "2vh",
            color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"Call"} />
        &nbsp; {get(form,'stepOne.mobile')}
      </Typography>

      <Typography
        sx={{
            width: "90%",
            marginBottom: "2vh",
            color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"LocationCity"} />
        &nbsp; {get(form,'stepOne.city')}
      </Typography>

      <Typography
        sx={{
            width: "90%",
            marginBottom: "2vh",
            color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"HomeWork"} />
        &nbsp; {get(form,'stepOne.state')}
      </Typography>

      <Typography
        sx={{
            width: "90%",
            marginBottom: "2vh",
            color: palette.tertiary.main,
        }}
      >
        <MultiIcon name={"Signpost"} />
        &nbsp; {get(form,'stepOne.postal_code')}
      </Typography>
    </Box>
  );
}

export default StepOne;
