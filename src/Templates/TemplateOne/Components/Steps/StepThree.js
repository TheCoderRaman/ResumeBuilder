import React from 'react';

import get from 'lodash/get';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

function StepThree({ form, themes, limit, templateForm }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <List
      dense={true}
      sx={{
        maxWidth: 360,
        width: '100%',
        scale: '1 0.8',
        backgroundColor: palette.secondary.main,
      }}
    >
      {Object.entries(get(form,'stepThree.data')).map(
        ([key,value],index) => {
          if(index >= limit){
            return;
          }

          let startYear = (Object
            .values(get(templateForm,'stepTwo.inputs'))
            .filter((value) => value?.type === 'fieldArray')?.at(0)?.inputs
            .filter((value) => value?.name === 'start_year')?.at(0)?.props?.options
          );

          let endYear = (Object
            .values(get(templateForm,'stepTwo.inputs'))
            .filter((value) => value?.type === 'fieldArray')?.at(0)?.inputs
            .filter((value) => value?.name === 'start_year')?.at(0)?.props?.options
          );

          return (
            <ListItem key={`#Experiences:${index}-${key}`} alignItems="flex-start">
              <ListItemText
                sx={{
                  fontWeight: 'bold',
                  color: palette.tertiary.main
                }}
                primary={get(value,'university')+' ('+get(value,'degree')+')'}
                secondary={
                  <React.Fragment>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{
                        display: 'inline',
                        fontStyle: 'normal',
                        color: palette.quaternary.main,
                      }}
                    >
                      {get(value,'type')}
                    </Typography>
                  </React.Fragment>
                }
              />

              <Typography sx={{ fontStyle: 'italic', color: palette.tertiary.main }}>
                {startYear[get(value,'start_year')]} {' - '} {endYear[get(value,'end_year')]}
              </Typography>
            </ListItem>
          );
        }
      )}
    </List>
  )
}

export default StepThree;