import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';

function StepThree({ form, themes, limit, templateForm }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        scale: '1 0.8',
        marginTop:'-5%',
        color: palette.primary.main,
        backgroundColor: palette.tertiary.main,
      }}
    >
      <Typography
        varient="h1"
        sx={{
          textAlign: "center",
          color: palette.primary.main,
        }}
      >
        {t('Education')}
      </Typography>

      <List dense={true}>
        {Object.entries(get(form,'stepThree.data')).map(
          ([key,value],index) => {
            if(index >= limit){
              return;
            }

            let startYear = (Object
              .values(get(templateForm,'stepThree.inputs'))
              .filter((value) => value?.type === 'fieldArray')?.at(0)?.inputs
              .filter((value) => value?.name === 'start_year')?.at(0)?.props?.options
            );
  
            let endYear = (Object
              .values(get(templateForm,'stepThree.inputs'))
              .filter((value) => value?.type === 'fieldArray')?.at(0)?.inputs
              .filter((value) => value?.name === 'start_year')?.at(0)?.props?.options
            );

            return (
              <ListItem key={`#Experience:${index}-${key}`}>
                <ListItemText
                  primary={
                    <Box>
                      <Typography varient="h1" fontSize="large">
                        <b>{index + 1}. {get(value,'type')}</b>
                      </Typography>
                      <Typography varient="h3" fontSize="medium">
                        {get(value,'university')} ({get(value,'degree')})
                      </Typography>
                      <Typography varient="h5" fontSize="small" sx={{ color: palette.quinary.main }}>
                        [ {startYear[get(value,'start_year')]+' - '+endYear[get(value,'end_year')]} ]
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            );
          }
        )}
      </List>
    </Box>
  );
}

export default StepThree;