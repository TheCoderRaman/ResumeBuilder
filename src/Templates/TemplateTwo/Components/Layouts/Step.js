import './Step.css';

import {
  Box,
  Grid,
  Divider,
  Typography,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import { stringToColor } from './../../../Utils/stringAvatar';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function Step({ step, themes, templateForm, children }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <Box>
      <Divider sx={{ margin: "10px 0px" }}>
        <Typography
          sx={{
            fontSize: {
                xs: "12px",
                sm: "16px",
                md: "20px",
                lg: "24px",
                xl: "28px"
            },
            color: palette.tertiary.main,
          }}
          className="step-heading"
        >
          {t(get(templateForm,`${step}.name`))}
        </Typography>
      </Divider>

      <Grid container spacing={2}>
        <Grid item>
          <MultiIcon
            fontSize="large"
            name={get(templateForm,`${step}.icon`)}
            sx={{color: stringToColor(get(templateForm,`${step}.icon`))}}
          />
        </Grid>

        <Grid item xs={10}>
          <div className='grid place-items-center'>
            {children}
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Step;