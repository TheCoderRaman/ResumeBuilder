import {
  List,
  ListItem,
  Typography,
  ListItemText,
} from '@mui/material';

import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import MultiIcon from './../../../../Components/Icons/MultiIcon';

function StepFour({ form, themes, limit }) {
  const { palette } = themes;
  const { t } = useTranslation();

  return (
    <div sx={{ width: '100%', scale: '1 0.8', marginTop:'-1%' }}>
      <Typography
        varient="h1"
        sx={{
          width: "90%",
          height: "4vh",
          marginBottom: "2vh",
          textAlign: "center",
          color: palette.primary.main,
          backgroundColor: palette.tertiary.main,
        }}
      >
        {t('Key Skills')}
      </Typography>

      <List dense={true}>
        {Object.entries(get(form,'stepFour.data')).map(
          ([key,value],index) => {
            if(index >= limit){
              return;
            }

            return (
              <ListItem key={`#Skills:${index}-${key}`}>
                <ListItemText
                  className='flex flex-col'
                  primary={
                    <>
                      <MultiIcon name={"Star"} sx={{ color: palette.tertiary.main, }}/>
                      <Typography sx={{ color: palette.tertiary.main, }}>
                        {value?.skill}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            );
          }
        )}
      </List>
    </div>
  );
}

export default StepFour;
