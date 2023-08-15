import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function StepOne({ form, themes }) {
  const { palette } = themes;

  return (
    <Box
      className='content-between'
      sx={{
        padding: '10px',
        backgroundColor: palette.secondary.main,
      }}
    >
        <Grid
          sx={{
            width: '80vh',
            scale: '1 0.8',
            marginTop:'-2%',
            marginBottom:'-5%'
          }}
          className="grid grid-cols-2 gap-1"
        >
            <Grid className="flex mb-4 gap-2">
                <MultiIcon
                  name={"Email"}
                  sx={{
                      color: palette.tertiary.main,
                  }}
                />
                <Typography
                    gutterBottom
                    align="center"
                    display="block"
                    variant="overline"
                    sx={{
                      color: palette.quaternary.main,
                    }}
                >
                  {get(form,'stepOne.email')}
                </Typography>
            </Grid>
    
            <Grid className="flex mb-4 gap-2">
                <MultiIcon
                  name={"Call"}
                  sx={{
                      color: palette.tertiary.main,
                  }}
                />
                <Typography
                    gutterBottom
                    align="center"
                    display="block"
                    variant="overline"
                    sx={{
                      color: palette.quaternary.main,
                    }}
                >
                  {get(form,'stepOne.mobile')}
                </Typography>
            </Grid>
    
            <Grid className="flex mb-4 gap-2">
                <MultiIcon
                  name={"LocationCity"}
                  sx={{
                    color: palette.tertiary.main,
                  }}
                />
                <Typography
                    gutterBottom
                    align="center"
                    display="block"
                    variant="overline"
                    sx={{
                      color: palette.quaternary.main,
                    }}
                >
                  {get(form,'stepOne.city')}
                </Typography>
            </Grid>
    
            <Grid className="flex mb-4 gap-2">
                <MultiIcon
                  name={"HomeWork"}
                  sx={{
                    color: palette.tertiary.main,
                  }}
                />
                <Typography
                    gutterBottom
                    align="center"
                    display="block"
                    variant="overline"
                    sx={{
                      color: palette.quaternary.main,
                    }}
                >
                  {get(form,'stepOne.state')}
                </Typography>
            </Grid>
    
            <Grid className="flex mb-4 gap-2">
                <MultiIcon
                  name={"Signpost"}
                  sx={{
                    color: palette.tertiary.main,
                  }}
                />
                <Typography
                    gutterBottom
                    align="center"
                    display="block"
                    variant="overline"
                    sx={{
                      color: palette.quaternary.main,
                    }}
                >
                  {get(form,'stepOne.postal_code')}
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default StepOne;